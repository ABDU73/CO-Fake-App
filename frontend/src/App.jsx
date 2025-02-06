import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Servers from "./pages/Servers";
import NotFound from "./pages/NotFound";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servers" element={<Servers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </>

  );
}

export default App;
