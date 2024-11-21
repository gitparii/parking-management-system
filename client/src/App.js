import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import ParkingSpace from './components/ParkingSpace';
import Wallet from './components/Wallet';
import Login from './components/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Login></Login>
      <SignUp></SignUp>
      <ParkingSpace></ParkingSpace>
      <Wallet></Wallet>
      <Footer></Footer>
    </div>
  );
}

export default App;
