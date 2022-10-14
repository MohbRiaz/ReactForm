
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { Container, Row, Col } from 'react-bootstrap';
import SignUp from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuth';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
