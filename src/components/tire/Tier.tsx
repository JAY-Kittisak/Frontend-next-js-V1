import React from 'react';
import { useQuery } from '@apollo/client'
import Loader from 'react-loader-spinner'

import * as s from './Tier.styles'
import { QUERY_USERS } from '../../apollo/queries'
import { User } from '../../types'
import { isClient } from '../../helpers/authHelpers'

const Admin: React.FC<{ client: User | null }> = ({ client }) => {

    const { data, loading, error } = useQuery<{ users: User[] }>(QUERY_USERS, {
        fetchPolicy: 'network-only',
      })

    return loading ? (
        <Loader type='Oval' color='teal' width={50} height={50} timeout={30000} />
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
                  Name
                </th>
                <th rowSpan={2} style={{ width: '20%' }}>
                  Email
                </th>
                <th rowSpan={2} style={{ width: '15%' }}>
                  Created At
                </th>
                {isClient(client) && (
                  <>
                    <th colSpan={4} style={{ width: '25%' }}>
                      Role
                    </th>
                    <th rowSpan={2} style={{ width: '10%' }}>
                      Edit Roles
                    </th>
                  </>
                )}
              </tr>
    
              {/* Edit Roles Sub Headers */}
              {isClient(client) && (
                <tr>
                  <th>Client</th>
                  <th>Editor</th>
                  <th>Admin</th>
                  <th>Super</th>
                </tr>
              )}
            </thead>
    
            <tbody>
              {data &&
                data.users.map((user) => (
                  <AdminRow user={user} key={user.id} admin={admin} />
                ))}
            </tbody>
          </s.Table>
        </s.Div>
      )
    }
    

export default Admin;
