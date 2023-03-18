import React from "react";
import Body from "./components/bodySection/Body";
import Sidebar from "./components/sidebarSection/Sidebar";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
};

export default App;
