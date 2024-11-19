import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import ParkingSpace from './components/ParkingSpace';
import Wallet from './components/Wallet';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Login></Login>
      <ParkingSpace></ParkingSpace>
      <Wallet></Wallet>
      <Footer></Footer>
    </div>
  );
}

export default App;
