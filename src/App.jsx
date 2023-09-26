import { Outlet } from "react-router";
import NavBar from "./Shared/NavBar";
import Footer from "./Shared/Footer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
      <NavBar />
      <Outlet />
      <Footer />
      </Provider>
    </>
  );
}

export default App;
