import { Outlet } from "react-router";
import { NavbarMenu } from "../../components/NavbarMenu";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const MainLayout = () => {
  return (
    <>
      <div className="min-h-full">
        <div className="header-banner text-header bg-gray-800 pb-32">
          <NavbarMenu />
          <Header />
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
