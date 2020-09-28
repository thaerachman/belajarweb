import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './halaman/Header';
import Footer from './halaman/Footer';


function App() {
  return (
    <div>
      <Header judul="Header 1" ket="keterangan 1" />
      <Header judul="Header 2"/>
      <Header judul="Header 3" ket="keterangan 3"/>
      {
      // Belajar komen
      }

      <h1> Belajar React Hari ke 2 </h1>
      <Footer judul="Footer 1" ket="keterangan 1"/>
      <Footer judul="Footer 2"/>
      <Footer judul="Footer 3" ket="keterangan 3"/>
    </div>
  );
}

export default App;
