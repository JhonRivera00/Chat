import {Routes,Route} from 'react-router-dom'
import InicioSesion from '../layout/InicioSesion'
import Chat from '../layout/Chat'
function Rutas() {
  return (
  <Routes>
    <Route index element={<InicioSesion/>}/>
    <Route path='/chat' element={<Chat/>}/>
    
  </Routes>
  )
}

export default Rutas
