import React from 'react';
import ProfilePage from '../src/components/ProfilePage';
import UserContext from '../src/components/UserProfile';

function App() {
  const userData = { name: "Precious Clement Thene", email: "preshybee000@gmail.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
