export default function ProductCard({ product }) {
  return (
    <>
      <article style={{ border: '5px solid green', padding: 10 }}>
        <h3>
          {product.title} - {product.id}
        </h3>
        <img src={product.image} alt={product.title} />
        <p>${product.price}</p>
        <button>Detalles</button>
      </article>
    </>
  );
}