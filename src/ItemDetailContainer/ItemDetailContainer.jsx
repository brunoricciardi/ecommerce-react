
import { useCartContext } from "../../context/cartContext"

import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({ producto }) {
    
const {addToCart, cartList} = useCartContext()

function onAdd(cant) {
    console.log(cant)
    addToCart( { ...producto, cantidad: cant } )
}

console.log(cartList);
  return (
      <>
      {/* imagen */}
        <div>{producto.name}</div>
        <div>{producto.price}</div>
        {/* <div>{producto.descripcion}</div> */}
        <ItemCount initiak={1} stock={10} onAdd={onAdd} />
     </>
  )
}

export default ItemDetail