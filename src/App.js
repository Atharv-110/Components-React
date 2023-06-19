import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useEffect, useState } from "react";
// import swal from "sweetalert";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={"#F7B801"}
          colorsTime={[60, 30]}
          size={100}
          strokeWidth={6}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </header>
    </div>
  );
}

export default App;
