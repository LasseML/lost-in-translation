import React from "react"
import { Route, Redirect } from "react-router-dom"


const PrivateRoute = (props) => {
  const session = sessionStorage.getItem('userName')
  
  if (session === null) {
    return <Redirect to ='/' />
  }

  return <Route {...props} />
}

export default PrivateRoute