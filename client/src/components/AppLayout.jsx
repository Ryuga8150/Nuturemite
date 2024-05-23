import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navbar";

function AppLayout() {
  return (
    <div className="xl:container container mx-auto">
      {/*
        Outlet wrapped in main
        as main will be styled
        thus same styling for outlet

        In outlets we either return 
        a fragment or elements
        no wasteful divs
      */}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
