import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Register } from './src/Components/Register';
import { Login } from './src/Components/Login';
import Consultancy from './src/Components/Consultancy';
import { Facilities } from './src/Components/Facilities';   
import { Aboutus } from './src/Components/Aboutus';
import { Home } from './src/Components/Home';
import LogOut from './src/Components/LogOut'; // Make sure to import the LogOut component
import './App.css';
import { useSelector } from 'react-redux';
import Spinner from './src/Components/Spinner';
import FrontPage from './src/Components/FrontPage';
import AdminRoute from './src/Pages/AdminRoute'; // Import AdminRoute
import Ambulance from "./src/pages/Ambulance"; // ✅ correct
import MapView from "./src/Components/MapView"; 

// import UserProfile from './src/Components/userProfile';

import Shop from './src/Components/Shop';

import Cart from './src/Components/Cart';

import HomeMedical from './src/Components/HomeMedical';
import Dermatology from './src/Pages/Dermatology';
import Cardiology from './src/Pages/Cardiology';
import Orthopedics from './src/Pages/Orthopedics';
import Pediatrics from './src/Pages/Pediatrics';
import Gynecology from './src/Pages/Gynecology';
import Oncology from './src/Pages/Oncology';
import Gastroenterology from './src/Pages/Gastroenterology';
import Endocrionology from './src/Pages/Endocrionology';
import Ophthalmology from './src/Pages/Ophthalmology';
import Neurology from './src/Pages/Neurology';
import HomePage from './src/Components/video_call/HomePage';
import RoomPage from './src/Components/video_call/RoomPage';
import Success from './src/Components/success';
// {new routes}
import HealthCheck from './src/Pages/HealthCheck';
import Recommended from './src/Pages/Recommended';
import Diabetes from './src/Pages/Diabetes';
import Heart from './src/Pages/Heart';
import Special from './src/Pages/Special';
import Women from './src/Pages/Women';
import Senior from './src/Pages/Senior';
import PreConception from './src/Pages/PreConception';
import Cancer from './src/Pages/Cancer';
import GeneralHealth from './src/Pages/GeneralHealth';
import Dashboard from './src/Pages/Dashboard';
import Chatbot from './src/Components/ChatBot'
import './src/Components/Chatbot.css'
// import GoToMapButton from './src/Components/Gotomapbutton';
// import GoToMapButton from './src/Components/GoToMapButton';
// import GoToMapButton from './src/Components/GoToMapButton'; 
// import "."
// import MapView from './MapView';


function App() {
  const { loading } = useSelector(state => state.alerts);
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <>
        <Routes>
          <Route path='/' element={token ? <FrontPage /> : <Navigate to="/Login" />} />

          <Route path='/Home' element={token ? <Home /> : <Navigate to="/Login" />} /> 

          <Route path='/Login' element={token ? <Navigate to="/" /> : <Login />} />
          <Route path='/Register' element={token ? <Navigate to="/" /> : <Register />} />
          <Route path="/room/:roomId" element={<RoomPage/>} />
          <Route path="/videoCall" element={<HomePage/>} />

          <Route path="/ambulance" element={<Ambulance />} />
          

          



          {/* <Route path="/user" element={<UserProfile/>}/>; */}
          <Route path='/FrontPage' element={<FrontPage/>} />

          <Route path='/Consultancy' element={<Consultancy />} />
          <Route path='/AboutUs' element={<Aboutus />} />
          <Route path='/Facilities' element={<Facilities />} />

          <Route path='/HomeMedical' element={<HomeMedical />} />

          <Route path='/Shop' element={<Shop />} />
          <Route path='/Cart' element={<Cart />} />


          {/* Conditional rendering of the Logout route */}
          <Route path='/Logout' element={token ? <LogOut /> : <Navigate to="/Login" />} />

          {/* Pages */}
        <Route path="/dermatology" element={<Dermatology />} />
        <Route path="/cardiology" element={<Cardiology />} />
        <Route path="/orthopedics" element={<Orthopedics />} />
        <Route path="/pediatrics" element={<Pediatrics />} />
        <Route path="/gynecology" element={<Gynecology />} />
        <Route path="/neurology" element={<Neurology />} />
        <Route path="/oncology" element={<Oncology />} />
        <Route path="/gastroenterology" element={<Gastroenterology />} />
        <Route path="/endocrionology" element={<Endocrionology />} />
        
        
        <Route path="/ophthalmology" element={<Ophthalmology />} />
        <Route path='/success' element={<Success/>} />
        <Route path='/healthcheck' element={<HealthCheck/>}/>
        <Route path='/healthcheck/R' element={<Recommended/>}/>
        <Route path='/healthcheck/D' element={<Diabetes/>}/>
        <Route path='/healthcheck/H' element={<Heart/>}/>
        <Route path='/healthcheck/S' element={<Special/>}/>
        <Route path='/healthcheck/W' element={<Women/>}/>
        <Route path='/healthcheck/S' element={<Senior/>}/>
        <Route path='/healthcheck/P' element={<PreConception/>}/>
        <Route path='/healthcheck/C' element={<Cancer/>}/>
        <Route path='/healthcheck/G' element={<GeneralHealth/>}/>
        

        <Route path='/dashboard' element={
        <AdminRoute>
          <Dashboard/>
       </AdminRoute>
         }/> 


  
   {/* <Route path="/nearby-hospitals" element={<GoToMapButton />} /> */}
   <Route path="/nearby-hospitals" element={<MapView />} />

     

        <Route path='/chatbot' element={<Chatbot/>}/> 
        </Routes>
        <div className="overlay">
          <Chatbot/>
        </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
