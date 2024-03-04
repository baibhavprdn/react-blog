// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navbar';
// import Home from './screens/home';
import HomeNew from './screens/HomeNew';
import Create from './screens/newBlog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content home">
          <Routes>
            <Route path="/" exact element={<HomeNew />}>
            </Route>
            <Route path="/create" exact element={<Create />}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
