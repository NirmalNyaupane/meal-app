import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Meal from "./pages/Meal";
import { MealContext } from "./context/MealContext";
function App() {
  return (
    <MealContext>
      <Router>
        <Routes>
          <Route path="/" element={<Meal />} />
        </Routes>
      </Router>
    </MealContext>
  );
}

export default App;
