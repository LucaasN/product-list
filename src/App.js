import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListaProductos from './components/ListaProductos';

function App() {

  const productos = [
    {
      id:0,
      nombre: "banana",
      cantidad: 10
    },
    {
      id:1,
      nombre: "manzana",
      cantidad: 0
    },
    {
      id:2,
      nombre: "naranja",
      cantidad: 5
    },
    {
      id:3,
      nombre: "durazno",
      cantidad: 1
    },
    {
      id:4,
      nombre: "anana",
      cantidad: 0
    }
  ];

  const productosEnStock = () => productos.filter(producto => producto.cantidad > 0);

  const productosSinStock = () => productos.filter(fruta => fruta.cantidad == 0);
  
  const productosAReponerStock = () => productos.filter(fruta => fruta.cantidad == 1);


  return (
    <div className="App">
      <header className="App-header">
        <ListaProductos titulo="Productos en stock" productos={productosEnStock()} />
        <ListaProductos titulo="Productos sin stock" productos={productosSinStock()} />
        <ListaProductos titulo="Productos a reponer" productos={productosAReponerStock()} />
      </header>
    </div>
  );
}

export default App;
