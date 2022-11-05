import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import { StoreItem } from './StoreItem'
import { Basket } from './Basket'
import items from './demo.json'
import { useState } from 'react'

function Menu() {
  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
  }
  const onRemove = () => {
    console.log(1)
  }
  return (
    <CommonLayout>
      <h1>Menu Page</h1>
      <h1>Menu Page</h1>
      <div style={{ display: 'flex' }}>
        <StoreItem onAdd={onAdd} onRemove={onRemove} products={items} />
        <Basket />
      </div>
    </CommonLayout>
  )
}

export default Menu
