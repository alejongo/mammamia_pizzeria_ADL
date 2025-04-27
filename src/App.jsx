import { useContext } from "react";
import "./App.css";
//import { Footer } from "./components/Footer";
import { Home } from "./views/Home";

import { SignIn } from "./views/SignIn";
import { SignUp } from "./views/SignUp";
import { Pizza } from "./views/Pizza";
import { Route, Routes, Navigate } from "react-router";
import { MainLayout } from "./views/Layouts/MainLayout";
import { NotFoundPage } from "./views/NotFoundPage";
import { ProfileView } from "./views/ProfileView";
import { UserContext } from "./contexts/UserContext";

function App() {
  //const { userData } = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="api/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={<ProfileView />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
