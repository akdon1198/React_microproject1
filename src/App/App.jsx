import "./App.css";
import leftimg from "../images/left.png";
import Cardcomponent from "../Cardcomponent/Cardcomponent";
import Formcomponent from "../Formcomponent/Formcomponent";
import { useState } from "react";
function App() {
  const [carddetail, setcarddetail] = useState({
    number : "0000 0000 0000 0000",
    name : "JANE APPLESEED",
    monthyear : "00/00",
    cvc : "000"
  })
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div className="left">
          <img src={leftimg} alt="leftimage" />
        </div>
        <div className="right"></div>
        <div
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "80%",
              margin: "auto",
              display:"flex",
              justifyContent:"space-between"
            }}
          >
            <Cardcomponent {...carddetail}/>
            <Formcomponent setcarddetail = {setcarddetail}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
