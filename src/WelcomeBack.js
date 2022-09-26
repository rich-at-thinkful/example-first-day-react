import React from "react";

function WelcomeBack({ name = "valued customer", language }) {
  let greeting = "Welcome";
  if (language === "es") {
    greeting = "Hola";
  }

  return (
    <div>{greeting}, {name}!</div>
  );
}

export default WelcomeBack;

