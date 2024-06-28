import React from 'react';
import { NavLink, Route,Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import AcercaDe from './components/AcercaDe';
import Error404 from './components/Error404';

const App = () => {
  return (
    <div>
      <header>
      <h1>Mi blog personal</h1>
      <nav>
        <NavLink to={'/'}>Inicio</NavLink>
        <NavLink to={'/blog'}>Blog</NavLink>
        <NavLink to={'/acerca'}>A cerca de</NavLink>
      </nav>
      </header>

      <main>

      <Routes>
        <Route path='*' element={<Error404/>}/>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/acerca' element={<AcercaDe/>}/>

      </Routes>

      </main>
    </div>
    );
}
 
export default App;