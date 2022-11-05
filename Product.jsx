export function Product({ onAdd, onRemove, product }) {
  return (
    <li style={{ display: 'flex' }} className="cart-sugg-item">
      <div className="cart-sugg-picture-wrapper">
        <img
          style={{ objectFit: 'cover', height: '100px', width: 'auto' }}
          alt="product-suggestion-img"
          src={product.imgUrl}
        />
      </div>
      <div className="cart-sugg-description">
        <h3>{product.title}</h3>
        <div className="cart-sugg-price-and-btn-wrapper">
          <p>{product.price}</p>
          <button onClick={() => onAdd(product)}>Add to Cart</button>
          <button onClick={onRemove}>Delete from Cart</button>
        </div>
      </div>
    </li>
  )
}
