import React from "react";
import WelcomeBack from "./WelcomeBack";

const welcomesData = [
  { name: "Chrisford", language: "es" },
  { name: "Joe", language: "de" },
  { last_name: "Smith" },
];

export default function WelcomeList() {
  return (
    <div>
      <h3>All the Welcomes</h3>
      {welcomesData.map((welcome, index) =>
        <WelcomeBack
          key={index}
          name={welcome.name}
          language={welcome.language}
          last_name={welcome.last_name}
        />
      )}
    </div>
  );
}
