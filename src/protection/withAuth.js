import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUserProfile } from '../actions/authActions';

const withAuth = WrappedComponent => props => {

  const {user} = useSelector(state=>state.auth);

  return(
    user ? (<WrappedComponent {...props} />) : (<Redirect to="/signin" />)
  )

}

export default withAuth;