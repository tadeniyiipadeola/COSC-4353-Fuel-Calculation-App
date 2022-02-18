import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Pages/ProfilePage"
import FuelQuoteForm from "./Pages/FuelQuoteForm"
import FuelQuoteHistory from "./Pages/FuelQuoteHistory"

function App() {
  return (
    <Router>
      <navbar />
      <Routes>
        <Route path='/' exact component={Profile} />
        <Route path='/FuelQuoteForm' component={FuelQuoteForm} />
        <Route path='/FuelQuoteHistory' component={FuelQuoteHistory} />
      </Routes>
    </Router>
  );
}

export default App;