import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import UserDetail from "./MainApp/UserDetail";
import UserList from "./MainApp/UserList";
import "./scss/index.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<UserList />} />
          <Route path={`/user/:id`} element={<UserDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
