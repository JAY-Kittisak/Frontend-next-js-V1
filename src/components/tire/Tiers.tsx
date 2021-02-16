import React from 'react';
import { useQuery } from '@apollo/client';
import Loader from 'react-loader-spinner';

import * as s from './Tier.styles';
import { QUERY_TIERS } from '../../apollo/queries';
import { Tier } from '../../types';
import TiersRow from './TiersRow';

const Tiers: React.FC = () => {
    const { data, loading, error } = useQuery<{ Tiers: Tier[] }>(QUERY_TIERS, {
        fetchPolicy: 'network-only'
    });
    console.log(data?.Tiers);

    return loading ? (
        <Loader type="Oval" color="teal" width={50} height={50} timeout={30000} />
    ) : error ? (
        <p>Sorry, something went wrong</p>
    ) : (
        <s.Div>
            <h3>นิคมอุตสาหกรรมในประเทศไทย</h3>
            <s.Table>
                <thead>
                    <tr>
                        <th rowSpan={2} style={{ width: '25%' }}>
                            บริษัท
                        </th>
                        <th rowSpan={2} style={{ width: '20%' }}>
                            นิคมอุตสาหกรรม
                        </th>
                        <th colSpan={4} style={{ width: '25%' }}>
                            ประเภท
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data && data.Tiers.map((Tiers) => <TiersRow Tier={Tiers} key={Tiers.id} />)}
                </tbody>
            </s.Table>
        </s.Div>
    );
};

export default Tiers;
