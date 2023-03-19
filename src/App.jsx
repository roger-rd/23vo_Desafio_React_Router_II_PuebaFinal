import './App.css'

import { Route, Routes } from 'react-router-dom'



import Navbar from './components/Navbar'
import Footer from './components/Footer'



import Home from './page/Home'
import Car from './page/Car'
import DetallePizza from './page/DetallePizza'





function App() {
  
  return (
    <>
  
          <Navbar />
          <main>
            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/DetallePizza/:id' element={<DetallePizza />} />
              <Route path='/Car/' element={<Car />} />
              
            </Routes>
          </main>
          <Footer />
          
     
    </>
  )
}
export default App
