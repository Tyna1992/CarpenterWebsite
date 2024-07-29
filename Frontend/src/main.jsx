import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Introduction from "../Pages/Intro/Introduction.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
         <Route path="/" element={<App />} >
            <Route path="bemutatkozó" element={<Introduction/>}/>
            <Route path="partnerek" element=""/>
            <Route path="galéria" element=""/>
            <Route path="árlista" element=""/>
            <Route path="tájékozató" element=""/>
            <Route path="bútor-kisokos" element=""/>
            <Route path="hírek" element=""/>
            <Route path="kapcsolat" element=""/>
             <Route path="vélemények" element=""/>
             
         </Route>
     </Routes>
         
    </BrowserRouter>
  </React.StrictMode>,
)
