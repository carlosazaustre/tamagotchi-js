import { useState, useEffect, useRef } from "react";
import "./Tamagotchi.css";

const THREE_SECONDS = 3000;

export function Tamagotchi() {
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [health, setHealth] = useState(100);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setHappiness((prevHappiness) => prevHappiness - 1);
      setHealth((prevHealth) => prevHealth - 1);
      setHunger((prevHunger) => prevHunger - 1);
    }, THREE_SECONDS);

    return () => clearInterval(timer.current);
  }, []);

  const feed = () => {
    setHunger((prevHunger) => prevHunger + 20);
    setHealth((prevHealth) => prevHealth + 5);
    setHappiness((prevHappiness) => prevHappiness + 5);
  };

  const play = () => {
    setHappiness((prevHappiness) => prevHappiness + 20);
    setHunger((prevHunger) => prevHunger - 5);
    setHealth((prevHealth) => prevHealth - 5);
  };

  const sleep = () => {
    setHunger(hunger - 5);
    setHappiness(happiness - 5);
    setHealth(health + 10);
  };

  const getProgressColor = (value) => {
    if (value > 60) return "#00C853";
    if (value > 20) return "#FFB300";
    return "#B71C1C";
  };

  return (
    <div className="Tamagotchi">
      <h1>Tamagotchi</h1>
      <div className="stats">
        <div className="stat">
          <label>Hunger:</label>
          <div
            className="value"
            style={{
              width: hunger + "%",
              backgroundColor: getProgressColor(hunger),
            }}
          />
        </div>
        <div className="stat">
          <label>Happiness:</label>
          <div
            className="value"
            style={{
              width: happiness + "%",
              backgroundColor: getProgressColor(happiness),
            }}
          />
        </div>
        <div className="stat">
          <label>Health:</label>
          <div
            className="value"
            style={{
              width: health + "%",
              backgroundColor: getProgressColor(health),
            }}
          />
        </div>
      </div>
      <div className="actions">
        <button onClick={feed}>Feed</button>
        <button onClick={play}>Play</button>
        <button onClick={sleep}>Sleep</button>
      </div>
    </div>
  );
}
