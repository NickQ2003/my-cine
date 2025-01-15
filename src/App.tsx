import React, { useState } from "react";
import CardList from "./components/CardList";
import BannerList from "./components/BannerList";
const App: React.FC = () => {

  return (
    <>
    
    <div>
      <main className="banner">
        <BannerList />
      </main>
        <div className="zona">
          <div className="search">
            <div className="placeholder"></div>
            <h3>Buscar</h3>
          </div>
          <main className="main">
            <CardList />
          </main>
        </div>
    </div>
    </>
  );
};

export default App;
