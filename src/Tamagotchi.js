import { useState } from "react";

export function Tamagotchi() {
  const [happiness, setHappiness] = useState(50);
  const [health, setHealth] = useState(50);

  function feed() {
    setHappiness(happiness + 10);
    setHealth(health + 10);
  }

  function play() {
    setHappiness(happiness + 20);
  }

  return (
    <div>
      <h1>Tamagotchi</h1>
      <p>Felicidad: {happiness}</p>
      <p>Salud: {health}</p>
      <button onClick={feed}>Alimentar</button>
      <button onClick={play}>Jugar</button>
    </div>
  );
}
