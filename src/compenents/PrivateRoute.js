
const PrivateRoute = () => {
  const session = sessionStorage.getItem('userName')
  
  if (session === null) {
    return <Redirect to ='/' />
  }

  return <Route {...props} />
}

export default PrivateRoute