import './App.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './component/navbar'
import HomeComponent from './Home'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={HomeComponent}/>
          </Switch>
      </Router>
     
    </>
  );
}

export default App;
