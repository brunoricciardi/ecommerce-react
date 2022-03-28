import React from 'react'
import Item from './Item'

const ItemList = ({libros}) => {
  return (
    <div>
           {libros.map((libro) => (
          <Item key={libro.id} libro={libro} />
        ))}
    </div>
  )
}

export default ItemList