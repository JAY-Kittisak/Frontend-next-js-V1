import React, { useContext } from 'react';
import * as s from './CreateFactory.styles';
import { useRouter } from 'next/router';
import { useForm, ErrorMessage } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import Loader from 'react-loader-spinner';

import Model from '../modal/Modal';
import { AuthContext } from '../../context/AuthContextProvider';
import { CREATE_FACTORY } from '../../apollo/mutations';
import { Factory, FactoryArgs } from '../../types';

interface Props {}

const CreateFactory: React.FC<Props> = () => {
    const { setAuthUser } = useContext(AuthContext);
    const { register, errors, handleSubmit } = useForm<{
        factoryName: string;
    }>();

    const router = useRouter();

    const [createFactory, { loading, error }] = useMutation<
        { createFactory: Factory },
        FactoryArgs
    >(CREATE_FACTORY);
        // < ^^^^^^^^^^^^^^^^^^ > คือ เจนาริค คือจะเป็น ตัว Return createFactory เป็น Factory


    const submitCreateFactory = handleSubmit(async ({ factoryName }) => {
        try {
            const response = await createFactory({
                variables: {factoryName,}
            })
            if (response?.data?.createFactory) {
                console.log('response?.data?.createFactory ===>', response?.data?.createFactory);
                console.log('response.data ===>', response.data); //FIXME: รอทดสอบ
                const { createFactory } = response.data;
                console.log('createFactory ===>', createFactory); //FIXME: รอทดสอบ
            }


            // if (response?.data?.createFactory) {
            //     const { createFactory } = response.data

            //     if (createFactory) {
            //         // Close form
            //         handleAuthAction('close')

            //         // Set loggedInUser in context api
            //         //   setAuthUser(createFactory)

            //         // Push user to their dashboard
            //         router.push('/dashboard')
            //     }
            // }
        } catch (error) {
            // setAuthUser(null)
        }
    }
    );
    console.log('loading :', loading)
    console.log('Error :', error)

    return (
        <Model>
            <s.FormContainer>
                <s.StyledForm onSubmit={submitCreateFactory}>
                    <p className="email_section_label">กรอบชื่อบริษัท</p>
                    <s.InputContainer>
                        <label>Factory Name</label>
                        <s.Input
                            type="text"
                            name="factoryName"
                            id="factoryName"
                            placeholder="ชื่อบริษัท ... จำกัด"
                            autoComplete="new-password"
                            ref={register({
                                required: 'โปรดกรอกชื่อบริษัท',
                                minLength: {
                                    value: 3,
                                    message: 'ชื่อบริษัทมีความยาวน้อยเกินไป'
                                },
                                maxLength: {
                                    value: 60,
                                    message: 'ชื่อบริษัทมีความยาวมากเกินไป'
                                }
                            })}
                        />
                        <ErrorMessage errors={errors} name="factoryName">
                            {({ message }) => <s.StyledError>{message}</s.StyledError>}
                        </ErrorMessage>
                    </s.InputContainer>
                    <s.Button
                        disabled={loading}
                        style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>
                        {loading ? (
                            <Loader
                                type="Oval"
                                color="white"
                                height={30}
                                width={30}
                                timeout={30000}
                            />
                        ) : (
                            'Submit'
                        )}
                    </s.Button>
                    {error && (
                        <s.StyledError>
                            {error.graphQLErrors[0]?.message || 'Sorry, something went wrong'}
                        </s.StyledError>
                    )}
                </s.StyledForm>
            </s.FormContainer>
        </Model>
    );
};

export default CreateFactory;
