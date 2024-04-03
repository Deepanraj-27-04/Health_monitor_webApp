import {BrowserRouter,Route,Routes,Router} from 'react-router-dom';
import Login from './pages/Login';
// import Register from './pages/Register';
import Register from './pages/Register';
// import Chart from './pages/Chart';
import Chart from './pages/Chart';
import ChatPage from './pages/ChatPage';
function App() {
  return (
    
    <BrowserRouter>
   
      <Routes>
        {/* <Route path='/' element={} */}
         <Route path='/' element={<Login />} />
         <Route path='/register' element={<Register />} />
         <Route path='/analytics' element={<Chart />} />
         <Route path='/chat' element={<ChatPage />} />
      </Routes>
    
    </BrowserRouter>
    // <div>
    //   <Register />
    //   <Login />
    //   <Chart />
    // </div>
  );
}

export default App;
