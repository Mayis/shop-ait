import { Provider } from "react-redux";
import RegisterForm from "./pages/RegisterForm";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import MainPage from "./pages/MainPage";
import PageByCategory from "./pages/PageByCategory";
import SelectedProductPage from "./pages/SelectedProductPage";
import BusketPage from "./pages/BusketPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/category" element={<PageByCategory />}>
            <Route path=":categoryId" element={<PageByCategory />} />
          </Route>
          <Route path="/products/current" element={<SelectedProductPage />}>
            <Route path=":productId" element={<SelectedProductPage />} />
          </Route>
          <Route path="/busket" element={<BusketPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
