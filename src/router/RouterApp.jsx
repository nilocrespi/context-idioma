import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../views/Profile";
import Home from "../views/Home";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
