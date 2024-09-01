import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import Footer from '../components/Footer/Footer';

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className='App'>
      <Header page={page} />
      <main>
        <Routes>
          <Route path='/' element={<Home setPage={setPage} />} name='home' />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
