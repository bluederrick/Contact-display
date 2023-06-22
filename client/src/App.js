
import './App.css';
// import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserName from './Components/UserName';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Reset from './Components/Reset';
import Recovery from './Components/Recovery';
import Password from './Components/Password';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Recovery" element={<Recovery />} />
          <Route path="/UserName" element={<UserName />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Reset" element={<Reset />} />
        </Routes>
      </BrowserRouter>

      {/* <Button variant="primary">Primary</Button>{' '} */}
    </div>
  );
}

export default App;
