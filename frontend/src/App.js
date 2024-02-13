import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <NextUIProvider>
      <div>
        <NavBar />
        <Main />
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default App;
