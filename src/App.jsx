import "./App.css";
//import { Footer } from "./components/Footer";
import { Home } from "./views/Home";

import { SignIn } from "./views/SignIn";
import { SignUp } from "./views/SignUp";
import { Pizza } from "./views/Pizza";
import { Route, Routes } from "react-router";
import { MainLayout } from "./views/Layouts/MainLayout";
import { NotFoundPage } from "./views/NotFoundPage";
import { ProfileView } from "./views/ProfileView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/userProfile" element={<ProfileView />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
