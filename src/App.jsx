import "App.scss";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import Register from "pages/register/Register";
import Watch from "pages/watch/Watch";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  const user = true;

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Home /> : <Navigate replace to="/register" />}
      />
      <Route path="/login"
        element={user ? <Navigate replace to="/" /> : <Login />}
      />

      <Route
        path="/register"
        element={user ? <Navigate replace to="/" /> : <Register />}
      />
      {user && (
        <>
          <Route path="/watch" element={<Watch />} />
          <Route path="/movies" element={<Home type="movies" />} />
          <Route path="/series" element={<Home type="series" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
