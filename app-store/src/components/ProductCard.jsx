

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="h-32 object-contain mb-4"
      />
      <h2 className="font-bold text-lg mb-2">{product.title}</h2>
      <p className="text-green-600 font-semibold mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-400"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
