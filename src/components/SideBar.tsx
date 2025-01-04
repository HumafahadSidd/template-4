const SideBar = () => {
  return (
    <div className="w-full sm:w-1/3 md:w-1/4 bg-white p-5 rounded-md shadow-md mx-auto sm:mx-0">
      {/* Product Brand Section */}
      <h2 className="text-lg font-semibold mb-4">Product Brand</h2>
      <ul className="space-y-2 mb-6">
        <li>
          <input type="checkbox" id="brand1" className="form-checkbox" />
          <label htmlFor="brand1" className="ml-2">Coaster Furniture</label>
        </li>
        <li>
          <input type="checkbox" id="brand2" className="form-checkbox" />
          <label htmlFor="brand2" className="ml-2">Fusion Dot High Fashion</label>
        </li>
        <li>
          <input type="checkbox" id="brand3" className="form-checkbox" />
          <label htmlFor="brand3" className="ml-2">Unique Furniture</label>
        </li>
      </ul>

      {/* Discount Offer Section */}
      <h2 className="text-lg font-semibold mb-4">Discount Offer</h2>
      <ul className="space-y-2 mb-6">
        <li>
          <input type="checkbox" id="offer1" className="form-checkbox" />
          <label htmlFor="offer1" className="ml-2">20% Cashback</label>
        </li>
        <li>
          <input type="checkbox" id="offer2" className="form-checkbox" />
          <label htmlFor="offer2" className="ml-2">5% Cashback</label>
        </li>
      </ul>

      {/* Price Filter Section */}
      <h2 className="text-lg font-semibold mb-4">Price Filter</h2>
      <ul className="space-y-2 mb-6">
        <li>
          <input type="radio" name="price" id="price1" className="form-radio" />
          <label htmlFor="price1" className="ml-2">$100 - $500</label>
        </li>
        <li>
          <input type="radio" name="price" id="price2" className="form-radio" />
          <label htmlFor="price2" className="ml-2">$500 - $1000</label>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
