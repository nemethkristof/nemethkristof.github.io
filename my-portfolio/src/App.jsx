import { useState } from "react";
import "./App.css";
import FloatingLines from './components/FloatingLines';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={5}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
    </>
  );
}

export default App;
