import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from 'react-loader-spinner';

import Tier from '../components/tire/Tier';
import { AuthContext } from '../context/AuthContextProvider';

export default function tier() {
    const { loggedInUser } = useContext(AuthContext);
    // ดึง    ^^loggedInUser จาก AuthContext^^^^^^
    const router = useRouter();

    // useEffect ในการเช็ค เมือ Component มัน render มันจะเช็คว่ามี loggedInUser มั้ย
    useEffect(() => {
        // ถ้าไม่ได้ Login ให้กลับไปหน้าแรก
        if (!loggedInUser) router.push('/');
    }, [loggedInUser]);
    //โดยมี ^^^^^^^^^^dependency(การพึ่งพา)  [loggedInUser]

    return !loggedInUser ? (
        <Loader type="Oval" color="teal" height={30} width={30} timeout={30000} />
    ) : (
        <h2>
            <Tier admin={loggedInUser} />
        </h2>
    );
}
