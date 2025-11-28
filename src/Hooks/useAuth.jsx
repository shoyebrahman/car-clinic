import React, { useContext } from 'react'
import { AuthContext } from '../provider/Authprovider'

export const useAuth = () => {
 const auth = useContext(AuthContext)
 return auth;
}
