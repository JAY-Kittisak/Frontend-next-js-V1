import React from 'react';
// import styled from 'styled-components';

import { Tier } from '../../types';

interface Props {
    Tier: Tier;
}

// const DeleteBtn = styled.button`
//     background: red;
//     color: white;

//     &:hover {
//         background: orange;
//     }
// `;

const TiersRow: React.FC<Props> = ({ Tier }) => {
    return (
        <tr key={Tier.id}>
            <td>{Tier.companyName}</td>
            <td>{Tier.industrialEstate}</td>
            <td>{Tier.businessType}</td>
        </tr>
    );
};

export default TiersRow;
