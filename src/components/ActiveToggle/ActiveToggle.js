import "./ActiveToggle.css";
import { useState } from "react";



function ActiveToggle() {
  const [active, setState] = useState("box");
  const box = document.querySelector(".box");

  return (

    <main>
      <div className="box" />
      <button type="button" onClick={() => setState(box.classList.toggle("box--active"))}>Activate</button>
    </main>
  );
}

export default ActiveToggle;
