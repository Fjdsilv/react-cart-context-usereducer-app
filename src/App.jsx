import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import ShareLayout from "./pages/ShareLayout";

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />}/>
          <Route path="cart" element={<Cart />}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
