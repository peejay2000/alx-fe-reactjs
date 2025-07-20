import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter'; // ✅ Import Counter

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Precious James" age={23} bio="A passionate React developer from Nigeria." />
      <Counter /> {/* ✅ Use Counter */}
      <Footer />
    </div>
  );
}

export default App;
