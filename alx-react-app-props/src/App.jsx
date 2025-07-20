// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter';
import UserContext from './components/UserContext';

function App() {
  const userData = {
    name: "Precious James",
    age: 23,
    bio: "A passionate React developer from Nigeria."
  };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <UserProfile /> {/* Now uses context instead of props */}
      <Counter />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
