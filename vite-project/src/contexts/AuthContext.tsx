import React, { Context } from 'react'

const AuthContext = React.createContext({});

export default function AuthProvider({children}: any) {
  return (
    <div>Auth</div>
  )
}
