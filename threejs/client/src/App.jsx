// import { useState } from "react";
// importing the pages
import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
function App() {
  return (
    <main className="app-transition-all ease-in">
      {/* will be used to load different components */}
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
