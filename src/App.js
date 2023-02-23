import { Route, Routes } from "react-router";
import "./App.css";
import Choose from "./components/Choose";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import PlanContainer from "./components/PlanContainer";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Programs />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Choose />} />
      </Routes>
      <Routes>
        <Route path="/" element={<PlanContainer />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Testimonials />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Join />} />
      </Routes>{" "}
      <Footer />
    </div>
  );
}

export default App;
