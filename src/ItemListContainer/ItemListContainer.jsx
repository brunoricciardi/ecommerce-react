import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemList from './ItemList'


const ItemListContainer = () => {
    const [libros,setLibros] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setLibros(json))
            console.log(libros);
    
    }, [])
    
  return (
    <div>
        <ItemList libros={libros}/>
    </div>
  )
}

export default ItemListContainer