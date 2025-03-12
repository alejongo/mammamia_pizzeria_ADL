import "./App.css";
//import { Footer } from "./components/Footer";
import { Home } from "./views/Home";
import { NavbarMenu } from "./components/NavbarMenu";
import { Header } from "./components/Header";
import { SignIn } from "./views/SignIn";
import { SignUp } from "./views/SignUp";

function App() {
  return (
    <>
      {/* <div className="min-h-full">
        <div className="header-banner text-header bg-gray-800 pb-32">
          <NavbarMenu />
          <Header />
        </div>
      </div>
      <Home /> */}
      {/* <SignUp /> */}
      <SignIn />
    </>
  );
}

export default App;
