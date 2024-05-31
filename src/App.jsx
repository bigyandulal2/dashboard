import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={toggle ? " app item-dark-bg" : " app item-light-bg"}>
      <Navbar setToggle={setToggle} toggle={toggle} />
      <Grid toggle={toggle} />
    </div>
  );
}
