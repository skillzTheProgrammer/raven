import { useAuthContext } from 'context/AuthContext'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { LOGIN } from 'Routes/route'


export default function ProtectedRoute({path, component}) {
        const {user} = useAuthContext()  
         if(user?.isAuth && user?.isAuth=== true){
            return <Route path={path} component={component} />
          }else { 
              sessionStorage.removeItem('isAuth')
            return  <Redirect to={LOGIN} />
          }

}
