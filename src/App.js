import logo from './logo.svg';
import './App.css';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import {useSelector} from 'react-redux';
import Login from './components/Login';
import Home from './components/Home';
function App() {
  var loginStatus = useSelector(state => state)
  return (
    <div className="App">
      <h1>This is a react-redux example project</h1>
      <p id='login-indicator'>are you logged in : {loginStatus}</p>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
