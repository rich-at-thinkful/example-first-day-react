import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WelcomeList from "./WelcomeList";
import Notifications from "./Notifications";
import './App.css';

function App() {
  const app = (
    <div className="App">
      <Header />
      <Notifications notices={["you have mail", "you have voicemail"]}/>
      <WelcomeList />
      <Footer />
    </div>
  );

  return app;
}

export default App;
