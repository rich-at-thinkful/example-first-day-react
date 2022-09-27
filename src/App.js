import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WelcomeList from "./WelcomeList";
import Notifications from "./Notifications";
import './App.css';
import Quote from "./Quote.js";


function App() {
  const app = (
    <div className="App">
      <Header />
      <div className="w-50 mx-auto">
        <Quote quote={{ text: "If at first you don't succeed, yada yada", author: "Anon" }} />
      </div>
      <Notifications notices={["you have mail", "you have voicemail"]}/>
      <WelcomeList />
      <p>This is an element in App component</p>
      <Footer />
    </div>
  );

  return app;
}

export default App;
