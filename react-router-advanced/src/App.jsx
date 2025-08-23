import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";  // ✅ use BlogPost

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="flex gap-4 p-4 bg-gray-200">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/blog/1">Blog</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/blog/:id" element={<BlogPost />} />   {/* ✅ */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
