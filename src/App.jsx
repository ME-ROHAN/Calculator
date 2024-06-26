import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setvalue] = useState("");

  const changehandle = (e) => {
    setvalue(e.target.value);
  };

  const clickhandle = (item) => {
    if (item === "C") {
      setvalue("");
      
    }
    else if (item === "DEL") {
      setvalue(value.slice(0,-1)); }

    else if (item === "=") {
      setvalue(eval(value).toString());
    } else {
      setvalue(value + item);
    }
  };

  return (
    <>
      <div className="MAIN">
        <h1 className="header"> React Calculator</h1>
        <div className="inp">
          <input className="inputval buta"
            type="text"
            value={value}
            name="numbs"
            readOnly
            onChange={changehandle}
          />
        </div>

        <div className="numsdiv">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "="].map(
            (item, index) => (
              <button className="nums but" key={index} onClick={() => clickhandle(item) }>
                {item}
              </button>
            )
          )}
        </div>

        <div className="operatordiv">
          {["+", "-", "*", "/", "DEL"].map((item, index) => (
            <button className="operator but" key={index} onClick={() => clickhandle(item)}>
              {" "}
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
