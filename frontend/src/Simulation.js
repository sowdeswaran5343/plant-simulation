import React, { useState } from "react";
import { runSimulation } from "./api";
import Chart from "./chart";
import bg from "./assets/plant.jpg";

export default function Simulation() {
  const [sunlight, setSunlight] = useState("Medium");
  const [water, setWater] = useState("Medium");
  const [days, setDays] = useState(10);

  const [data, setData] = useState([]);
  const [animatedData, setAnimatedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const run = async () => {

  setAnimatedData([]);   // IMPORTANT FIX
  setLoading(true);

  const res = await runSimulation({
    sunlight,
    water,
    days,
  });

  setData(res.data);

  let i = 0;

  const interval = setInterval(() => {
    setAnimatedData((prev) => [...prev, res.data[i]]);
    i++;

    if (i >= res.data.length) {
      clearInterval(interval);
      setLoading(false);
    }

  }, 500);

};
 const reset = () => {
  setData([]);
  setAnimatedData([]);
  setLoading(false);
};
const getHealthColor = (health) => {
  if (health === "Optimal") return "#2e7d32";
  if (health === "Stress") return "#d32f2f";
  if (health === "Root Rot") return "#f57c00";
  return "#2196f3";
};
  return (
   
  <div style={styles.container}>   {/* background here */}

    <h1 style={{
    color: "white",
    textShadow: "2px 2px 6px rgba(0,0,0,0.7)"
  }}>🌱 Plant Simulation Engine</h1>
   <div style={styles.card}>

  <div style={styles.row}>
    <div style={styles.field}>
      <label>Sunlight</label>
      <select onChange={(e) => setSunlight(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>

    <div style={styles.field}>
      <label>Water</label>
      <select onChange={(e) => setWater(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>

    <div style={styles.field}>
      <label>Days</label>
      <input
        type="number"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />
    </div>
  </div>

  <div style={{ marginTop: 15 }}>
    <button onClick={run} style={styles.button}>
      Run Simulation
    </button>

    <button onClick={reset} style={styles.reset}>
      Reset
    </button>
  </div>

</div>
      {loading && <h3>🌿 Simulating...</h3>}

      <Chart data={animatedData} />

      {animatedData.length > 0 && (
        <div style={styles.status}>
          <h3>Current Status</h3>
          <p>
            Day: {animatedData[animatedData.length - 1].day}
            <br />
            Growth: {animatedData[animatedData.length - 1].growth}
            <br />
           Health:
<span
  style={{
    ...styles.badge,
    background: getHealthColor(
      animatedData[animatedData.length - 1].health
    )
  }}
>
  {animatedData[animatedData.length - 1].health}
</span>
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
  padding: 30,
  fontFamily: "Arial",
  minHeight: "100vh",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
},

  card: {
  background: "rgba(255,255,255,0.85)",
  padding: 20,
  borderRadius: 12,
  width: 500,
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
},

  button: {
    background: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    marginRight: 10,
    borderRadius: 5,
  },
  row: {
  display: "flex",
  gap: "20px",
  marginTop: 10
},

field: {
  display: "flex",
  flexDirection: "column",
  fontSize: 14
},

  reset: {
    background: "#ff5252",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: 5,
  },

  status: {
  marginTop: 20,
  padding: 20,
  background: "rgba(255,255,255,0.85)",
  width: 320,
  borderRadius: 12,
  backdropFilter: "blur(6px)"
},

  badge: {
  color: "white",
  padding: "4px 10px",
  borderRadius: 5,
  marginLeft: 8
},
};