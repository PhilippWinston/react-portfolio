import React, { useState } from "react";
import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import WorkingProjects from "./Components/Working-Projects";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";

function App() {
  const [currentTab, handleTabChange] = useState("Home");

  const renderTab = () => {
    if (currentTab === "Home") {
      return <Home />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Portfolio") {
      return <WorkingProjects />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    return <Home />;
  };

  return (
    <>
      <Header currentTab={currentTab} handleTabChange={handleTabChange} />
      <div>
        <main>{renderTab()}</main>
      </div>
      <Footer />
    </>
  );
}

export default App;