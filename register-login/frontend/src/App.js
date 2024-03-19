import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Register />} path="/register" />
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}

export default App;
