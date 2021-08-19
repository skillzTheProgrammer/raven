import { useAuthContext } from 'context/AuthContext'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {LOGIN} from 'routes/routes'

export default function ProtectedRoute({path, component}) {
        const {user} = useAuthContext()  
        console.log('User',user)
         if(user?.isAuth && user?.isAuth=== true){
            return <Route path={path} component={component} />
          }else { 
              sessionStorage.removeItem('userDetails')
            return  <Redirect to={LOGIN} />
          }

}
