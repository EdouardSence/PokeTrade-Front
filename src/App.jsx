import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Matches from './pages/Matches';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/dashboard">Dashboard</Link> |
        <Link to="/matches">Matches</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/matches" element={<Matches />} />
      </Routes>
    </Router>
  );
};

export default App;