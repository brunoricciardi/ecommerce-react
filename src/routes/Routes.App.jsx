import { useState} from "react"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from '../components/Cart/Cart'
import NavBar from '../components/NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo'
import ItemDetailContainer from '../container/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../container/ItemListContainer/ItemListContainer'
import CartContextProvider from '../context/CartContext'

function RoutesApp() {
    const obj = {tit: 'Soy titulo de App', subTit: 'soy sub tit' }

    return (
        <BrowserRouter>
            <CartContextProvider>
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={<ItemListContainer
                            greeting= 'hola soy ItemListContainer'
                            titulo= { Titulo }
                        />}
                    />
                    <Route
                        path="/categoria/:categoriaId"
                        element={<ItemListContainer
                            greeting='ItemListContainer'
                            titulo={Titulo}
                        />}
                        />
                        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} /> 
                        
                        <Route path="/*" element={<Navigate to='/' replace/>} />

                        </Routes>
                    </CartContextProvider>
                </BrowserRouter>
    )
}

export default RoutesApp