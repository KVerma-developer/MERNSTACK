import React, { useState, useEffect } from 'react';
import { googleLogout } from '@react-oauth/google';
import axios from 'axios';

const GoogleDetails = ({ user }) => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
//   const logOut = () => {
//     googleLogout();
//     setProfile(null);
//   };

  return (
    <div className="mt-20">
      {profile ? (
        <div>
          <img src={profile.picture} alt="userimage" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          {/* <button onClick={logOut}>Log out</button> */}
        </div>
      ) : (
        <p>User is not logged in.</p>
      )}
    </div>
  );
};

export default GoogleDetails;
