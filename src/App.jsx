
import { Outlet } from "react-router";
import NavBar from "./Shared/NavBar";
import Footer from "./Shared/Footer";

function App() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
