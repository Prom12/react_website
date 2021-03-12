import './App.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './component/navbar'
import Footer from './component/Footer'
import HomeComponent from './Home'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={HomeComponent}/>
          </Switch>
        <Footer/>
      </Router>
     
    </>
  );
}

export default App;
