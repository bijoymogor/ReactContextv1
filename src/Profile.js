import React from 'react';
import { useContext } from 'react';
import { LoginContext } from './Context/LoginContext';


function Profile() {
    const {username} = useContext(LoginContext)

  return (
    <>
    <h1>Profile</h1>
    <h2>Hello {username}</h2>
    </>
  )
}

export default Profile;