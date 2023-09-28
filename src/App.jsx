import { Outlet } from "react-router";
import NavBar from "./Shared/Components/NavBar";
import Footer from "./Shared/Components/Footer";
import { Provider } from "react-redux";
import store from "./store";
import ScrollTo from "./Shared/Components/ScrollToTop";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Outlet />
        <Footer />
        <ScrollTo />
        <ScrollToTop smooth color="#FFF" className={"scroll-btn"} />
      </Provider>
    </>
  );
}

export default App;
