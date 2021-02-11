import React from 'react';
// import styled from 'styled-components';

import { Factory } from '../../types';

interface Props {
    Factory: Factory;
}

// const DeleteBtn = styled.button`
//     background: red;
//     color: white;

//     &:hover {
//         background: orange;
//     }
// `;

const TierRow: React.FC<Props> = ({ Factory }) => {
    return (
        <tr key={Factory.id}>
            <td>{Factory.factoryName}</td>
            {Factory.productsMe.map((data) => {
                return <td key={data.id}>{data.productName}</td>;
            })}

            {Factory.receivedProducts.map((data) => {
                return (
                    <>
                        <td key={data.id}>
                            {data.factoryName.factoryName} ผลิต
                            <br />
                            <tr>{data.productName}</tr>
                        </td>
                    </>
                );
            })}
        </tr>
    );
};

export default TierRow;
