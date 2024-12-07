

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-green-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold font-mono">👗 TrendyCart</h1>
      <button
        onClick={openCart}
        className="bg-white text-green-600 px-4 py-2 rounded hover:bg-slate-300 hover:text-black"
      >
        <span class="material-symbols-outlined">
shopping_cart
</span>
       ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
