import React from 'react';


const AddToCartButton = () => {
  const router = useClientRouter();

  const handleAddToCart = () => {
    // Add any additional functionality here (e.g., adding items to the cart state)

    // Navigate to the cart page
    router.push('/cart');
  };

  return (
    <button
      className="text-black py-2 px-4 rounded"
      onClick={handleAddToCart}
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
function useClientRouter() {
    return {
        push: (url: string) => {
            console.log(`Navigating to ${url}`);
            // Implement actual navigation logic here
        }
    };
}

