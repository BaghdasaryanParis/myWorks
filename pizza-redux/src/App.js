import Content from "./comps/content/Content";
import Header from "./comps/header/Header";
import Shop from "./comps/shop/shop";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
     
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>

  );
}

export default App;
