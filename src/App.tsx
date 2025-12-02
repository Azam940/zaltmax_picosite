import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import KatalogHomeTop from './pages/katalogHomeTop';
import GonHomeTop from './pages/gonHomeTop';
import IzdeleniyaHomeTop from './pages/izdeleniyaHomeTop';
import FonatHomeTop from './pages/fonatHomeTop';
import SopustvuyuwiyHomeTop from './pages/sopustvuyuwiyHomeTop';
import Novinok from './components/novinok';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<KatalogHomeTop/> } />
        <Route path="/orujiya" element={<GonHomeTop/> } />
        <Route path="/izdeleniyaa" element={<IzdeleniyaHomeTop/>} />
        <Route path="/fonari" element={<FonatHomeTop/>} />
        <Route path="/sopustvuyushiy" element={<SopustvuyuwiyHomeTop/>} />
        <Route path="/novinok" element={<Novinok/> } />
      </Routes>
    </>
  )
}

export default App
