import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Adjust path if needed

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '5px' }}>{userData.name}</h2>
      <p style={{ fontSize: '18px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{userData.age || 'N/A'}</span>
      </p>
      <p style={{ fontStyle: 'italic', color: 'gray' }}>{userData.bio || 'No bio available.'}</p>
    </div>
  );
}

export default UserProfile;
