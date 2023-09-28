import { Outlet } from "react-router";
import NavBar from "./Shared/Components/NavBar";
import Footer from "./Shared/Components/Footer";
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
