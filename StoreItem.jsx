import { Product } from './Product'

export function StoreItem({ onAdd, onRemove, products }) {
  console.log(products)
  return (
    <div style={{ width: '70vw' }}>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <Product
            onAdd={onAdd}
            onRemove={onRemove}
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </div>
  )
}
