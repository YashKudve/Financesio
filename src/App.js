import logo from './components/Financesio logo.png';
import Graph from './components/Graph';
import Form from './components/Form';
import './App.css';
import Footer from './Footer/Footer';
// import Button from '@mui/material/Button';
// import Login from './login/login';
// import Register from './register/register';

// import{
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch> */}
          {/* <Route exact path='/'><Homepage /></Route> */}
          {/* <Route path='/login'><Login /></Route>
          <Route path='/register'><Register /></Route>
        </Switch>
      </Router> */}
      <div className="cl">
        <img src={logo} alt="Logo" className='Logo'/>
        {/* <Button variant="contained" className='btn'>Login</Button> */}
        </div>
      {/* <div className="btn"><Button variant="contained">Login</Button></div> */}
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-200">
        
        <h1 className='Finan text-4xl py-7 mb-10 bg-slate-700 text-white rounded-3xl '>
          {/* <img src={logo} alt="Logo" className='Logo'/> */}
          Financesio</h1>


        {/* Making 2 columns for medium screen sized devices */}
        <div className="grid md:grid-cols-2 gap-4"> 
        {/* Graph/Chart */}
        <Graph />

        {/* Form */}
        <Form />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
