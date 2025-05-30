import "./App.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/Routes";
import SettingsPanel from "./components/common/SettingsPanel";

function App() {
  const location = useLocation();
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);

  useEffect(() => {
    document.body.classList.add("sidebar-fixed");
    return () => {
      document.body.classList.remove("sidebar-fixed");
    };
  });

  useEffect(() => {
    const fullPageLayoutRoutes = [
      "/user-pages/login",
      "/user-pages/login-2",
      "/user-pages/register",
      "/user-pages/register-2",
      "/user-pages/lock-screen",
      "/error-pages/404",
      "/error-pages/500",
      "/general-pages/landing",
    ];
    setIsFullPageLayout(fullPageLayoutRoutes.includes(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    const pageBodyWrapper = document.querySelector(".page-body-wrapper");
    if (isFullPageLayout) {
      pageBodyWrapper.classList.add("full-page-wrapper");
      document.body.classList.remove("sidebar-fixed");
    } else {
      pageBodyWrapper.classList.remove("full-page-wrapper");
      document.body.classList.add("sidebar-fixed");
    }
  }, [isFullPageLayout]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (location.pathname === "/rtl") {
      body.classList.add("rtl");
      body.classList.remove("sidebar-fixed");
      // console.log('rtl activated')
    } else {
      body.classList.remove("rtl");
    }
  }, [location.pathname]);

  return (
    <div className="container-scroller">
      {!isFullPageLayout && <Navbar />}
      <div className="container-fluid page-body-wrapper">
        {!isFullPageLayout && <Sidebar />}
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes />
            {!isFullPageLayout && <SettingsPanel/>}
          </div>
          {!isFullPageLayout && <Footer />}
        </div>
      </div>
    </div>
  );
}

export default App;
