import React from "react";
import "./WelcomeBack.css";

function WelcomeBack({ name = "valued customer", language }) {
  let greeting = "Welcome";
  if (language === "es") {
    greeting = "Hola";
  }

  return (
    <div className="WelcomeBack">
      <p>{greeting}, <span>{name}</span>!</p>
    </div>
  );
}

export default WelcomeBack;

