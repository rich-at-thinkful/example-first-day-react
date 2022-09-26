import React from "react";
import WelcomeBack from "./WelcomeBack";

export default function WelcomeList() {
  return (
    <div>
      <h3>All the Welcomes</h3>
      <WelcomeBack name="Rich" language="es" />
      <WelcomeBack name="Joe" language="de" />
      <WelcomeBack />
    </div>
  );
}
