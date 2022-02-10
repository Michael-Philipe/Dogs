import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { UserStorage } from './UserContext';
import User from './components/User';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import Photo from "./components/Photo/index"
import UserProfile from './components/User/UserProfile';
import NotFound from './components/NotFound';



const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <UserStorage>
        <Header />
        <main className="AppBody">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login/*' element={<Login />} />
          <Route path='conta/*' element={<ProtectedRoute>
            <User/>
          </ProtectedRoute>} />
          <Route path="foto/:id" element={<Photo/>}/>
          <Route path="perfil/:user" element={<UserProfile/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </main>
        <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
