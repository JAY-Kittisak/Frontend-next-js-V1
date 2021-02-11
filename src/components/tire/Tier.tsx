import React from 'react';
import { useQuery } from '@apollo/client';
import Loader from 'react-loader-spinner';

import * as s from './Tier.styles';
import { QUERY_FACTORIES } from '../../apollo/queries';
import { Factory } from '../../types';
import TierRow from './TierRow';
import { User } from '../../types'
import { isSuperAdmin } from '../../helpers/authHelpers'


const Tier: React.FC<{ admin: User | null }> = ({ admin })=> {
    const { data, loading, error } = useQuery<{ Factories: Factory[] }>(QUERY_FACTORIES, {
        fetchPolicy: 'network-only'
    });
    console.log(data?.Factories);

    return loading ? (
        <Loader type="Oval" color="teal" width={50} height={50} timeout={30000} />
    ) : error ? (
        <p>Sorry, something went wrong</p>
    ) : (
        
        <s.Div>
            <h3>Permission Management</h3>
            <s.Table>
                <thead>
                    <tr>
                        {/* Header */}
                        <th rowSpan={2} style={{ width: '25%' }}>
                            บริษัท
                        </th>
                        <th rowSpan={2} style={{ width: '20%' }}>
                            ผลิตสินค้า
                        </th>
                        {/* <th rowSpan={2} style={{ width: '15%' }}>
                            receivedProducts
                        </th>
                        <th rowSpan={2} style={{ width: '15%' }}>
                            receivedProducts
                        </th>
                        <th rowSpan={2} style={{ width: '15%' }}>
                            receivedProducts
                        </th> */}
                        <>
                            <th colSpan={4} style={{ width: '25%' }}>
                                Tier
                            </th>
                        </>
                    </tr>
                    {isSuperAdmin(admin) && (
            <tr>
              <th>Tier1</th>
              <th>Tier2</th>
              <th>Tier3</th>
              <th>Tier4</th>
            </tr>
          )}
                </thead>

                <tbody>
                    {data &&
                        data.Factories.map((factory) => (
                            <TierRow Factory={factory} key={factory.id} />
                        ))}
                </tbody>
            </s.Table>
        </s.Div>
    );
};

export default Tier;
