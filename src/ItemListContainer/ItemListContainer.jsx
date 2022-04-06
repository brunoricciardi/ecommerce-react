import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemList from './ItemList'
import './Item.css'

//firebase suguiendo al profe
import {getDoc, getFirestore, limit, where} from 'firebase/firestore'


useEffect (()=>{
  const querydb = getFirestore()
  const queryCollection = collection(querydb, 'productos')
  const queryFilter = query(queryCollection,
    where('categoria', '==', 'libro')
    limit(1)
    
    )


  
  const queryProd= doc(querydb, 'productos','1MJF4X04cOJKrJ9rAJxK' )

  getDoc(queryFilter)
  .then(resp => setProductos( resp.doc.map(item => ({id: item.id, ...item.data() } ) )))
  .catch(err => console.log(err))
  .finally(() => setLoading(false))
},[])





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