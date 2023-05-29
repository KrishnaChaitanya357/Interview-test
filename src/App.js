import ProductList from "./Components/ProductList";
import { Provider } from "react-redux";
import "./styles.css";
import store from "./Redux/Store/Store";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ProductList />
      </Provider>
    </div>
  );
}
