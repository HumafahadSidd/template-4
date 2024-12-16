
const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white p-5 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Product Brand</h2>
      <ul className="space-y-2 mb-6">
        <li><input type="checkbox" id="brand1" /> <label htmlFor="brand1">Coaster Furniture</label></li>
        <li><input type="checkbox" id="brand2" /> <label htmlFor="brand2">Fusion Dot High Fashion</label></li>
        <li><input type="checkbox" id="brand3" /> <label htmlFor="brand3">Unique Furniture</label></li>
      </ul>

      <h2 className="text-lg font-semibold mb-4">Discount Offer</h2>
      <ul className="space-y-2 mb-6">
        <li><input type="checkbox" id="offer1" /> <label htmlFor="offer1">20% Cashback</label></li>
        <li><input type="checkbox" id="offer2" /> <label htmlFor="offer2">5% Cashback</label></li>
      </ul>

      <h2 className="text-lg font-semibold mb-4">Price Filter</h2>
      <ul className="space-y-2 mb-6">
        <li><input type="radio" name="price" id="price1" /> <label htmlFor="price1">$100 - $500</label></li>
        <li><input type="radio" name="price" id="price2" /> <label htmlFor="price2">$500 - $1000</label></li>
      </ul>
    </div>
  );
};

export default Sidebar;
