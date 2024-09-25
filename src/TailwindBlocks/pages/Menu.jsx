// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';  // Import CartContext
// import Swal from 'sweetalert2';  // Import SweetAlert2
// import g1 from "../../images/g1.jpg";
// import g2 from "../../images/g2.avif";
// import g3 from "../../images/g3.jpg";
// import g4 from "../../images/g4.jpg";
// import g5 from "../../images/g5.jpg";
// import g6 from "../../images/g6.jpg";
// import g7 from "../../images/g7.jpg";
// import g8 from "../../images/g8.jpg";
// import g9 from "../../images/g9.jpg";

// // Ice cream data
// const iceCreamData = [
//   {
//     name: 'Vanilla Ice Cream',
//     image: g1,
//     description: 'Classic and creamy vanilla flavor',
//     price: 4.99,
//   },
//   {
//     name: 'Chocolate Ice Cream',
//     image: g2,
//     description: 'Rich and indulgent chocolate flavor',
//     price: 5.99,
//   },
//   {
//     name: 'Strawberry Ice Cream',
//     image: g3,
//     description: 'Fresh and fruity strawberry flavor',
//     price: 6.99,
//   },
//   {
//     name: 'Vanilla Ice Cream',
//     image: g4,
//     description: 'Classic and creamy vanilla flavor',
//     price: 4.99,
//   },
//   {
//     name: 'Chocolate Ice Cream',
//     image: g5,
//     description: 'Rich and indulgent chocolate flavor',
//     price: 5.99,
//   },
//   {
//     name: 'Strawberry Ice Cream',
//     image: g6,
//     description: 'Fresh and fruity strawberry flavor',
//     price: 6.99,
//   },
//   {
//     name: 'Vanilla Ice Cream',
//     image: g7,
//     description: 'Classic and creamy vanilla flavor',
//     price: 4.99,
//   },
//   {
//     name: 'Chocolate Ice Cream',
//     image: g8,
//     description: 'Rich and indulgent chocolate flavor',
//     price: 5.99,
//   },
//   {
//     name: 'Strawberry Ice Cream',
//     image: g9,
//     description: 'Fresh and fruity strawberry flavor',
//     price: 6.99,
//   },
// ];

// // Styling classes
// const cardClasses = 'bg-card p-4 rounded-lg shadow-lg';
// const buttonClasses = 'text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg mt-2 border-blue-300';

// const IceCreamCard = ({ name, image, description, price }) => {
//   const { addToCart } = useContext(CartContext);  // Get addToCart from CartContext

//   const handleAddToCart = () => {
//     addToCart({ name, image, price });

//     // SweetAlert2 for popup
//     Swal.fire({
//       title: 'Added to Cart!',
//       text: `${name} has been added to your cart.`,
//       icon: 'success',
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#3085d6',
//       timer: 1500,
//       showConfirmButton: false,
//     });
//   };

//   return (
//     <div className={cardClasses}>
//       <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
//       <h2 className="text-lg font-bold mb-2">{name}</h2>
//       <p className="text-sm text-zinc-500 mb-4">{description}</p>
//       <span className="text-primary font-bold">${price.toFixed(2)}</span>
//       <button onClick={handleAddToCart} className='text-primary-foreground hover:bg-blue-700 px-4 py-2 rounded-lg mt-2 ml-20 bg-blue-500 text-[#ffffff]'>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// const IceCreamMenu = () => {
//   return (
//     <div className="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold mb-8">Our Delicious Ice Cream Menu</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {iceCreamData.map((iceCream, index) => (
//           <IceCreamCard key={index} {...iceCream} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IceCreamMenu;



// import React, { useContext, useState, useEffect } from 'react';
// import { CartContext } from './CartContext';  // Import CartContext
// import Swal from 'sweetalert2';  // Import SweetAlert2

// // Styling classes
// const cardClasses = 'bg-card p-4 rounded-lg shadow-lg w-[300px]';
// const buttonClasses = 'text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg mt-2 border-blue-300';

// const IceCreamCard = ({_id, productName, image, description, price }) => {
//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = () => {
//     addToCart({ name: productName, image, price,_id });
//     Swal.fire({
//       title: 'Added to Cart!',
//       text: `${productName} has been added to your cart.`,
//       icon: 'success',
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#3085d6',
//       timer: 1500,
//       showConfirmButton: false,
//     });
//   };

//   // Construct full image URL - Assuming image is the filename stored in the `uploads` folder
//   const imageUrl = `http://localhost:4000/uploads/${image}`;

//   return (
//     <div className={cardClasses}>
//       <img
//         src={imageUrl}
//         alt={productName}
//         onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }} // Fallback image
//         className="w-full h-48 object-cover rounded-lg mb-4"
//       />
//       <h2 className="text-lg font-bold mb-2">{productName}</h2>
//       <p className="text-sm text-zinc-500 mb-4">{description}</p>
//       <span className="text-primary font-bold">${price.toFixed(2)}</span>
//       <button onClick={handleAddToCart} className={buttonClasses + ' bg-blue-500 text-[#ffffff] ml-[100px]'}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// const IceCreamMenu = () => {
//   const [iceCreamData, setIceCreamData] = useState([]);  // State for ice cream data
//   const [loading, setLoading] = useState(true);  // State for loading status
//   const [error, setError] = useState(null);  // State for error handling

//   useEffect(() => {
//     const fetchIceCreamData = async () => {
//       try {
//         // Replace with your API endpoint
//         const response = await fetch('http://localhost:4000/product/get-products');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();

//         setIceCreamData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchIceCreamData();
//   }, []); 
  
//   console.log(iceCreamData)// Empty dependency array means this runs once on mount

//   if (loading) {
//     return <div>Loading...</div>;  // Loading state
//   }

//   if (error) {
//     return <div>Error: {error}</div>;  // Error state
//   }

//   return (
//     <div className="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold mb-8">Our Delicious Ice Cream Menu</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {iceCreamData.map((iceCream, index) => (
//           <IceCreamCard key={index} {...iceCream} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IceCreamMenu;
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';  // Import CartContext
import Swal from 'sweetalert2';  // Import SweetAlert2

// Styling classes
const cardClasses = 'bg-card p-4 rounded-lg shadow-lg w-[300px]';
const buttonClasses = 'text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg mt-2 border-blue-300';

const IceCreamCard = ({ _id, productName, image, description, price }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ name: productName, image, price, _id });
    Swal.fire({
      title: 'Added to Cart!',
      text: `${productName} has been added to your cart.`,
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // Construct full image URL
  const imageUrl = `https://atozicecreamdashboard.onrender.com/uploads/${image}`;

  return (
    <div className={cardClasses}>
      <img
        src={imageUrl}
        alt={productName}
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }} // Fallback image
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{productName}</h2>
      <p className="text-sm text-zinc-500 mb-4">{description}</p>
      <span className="text-primary font-bold">${price.toFixed(2)}</span>
      <button onClick={handleAddToCart} className={buttonClasses + ' bg-blue-500 text-[#ffffff] ml-[100px]'}>
        Add to Cart
      </button>
    </div>
  );
};

const IceCreamMenu = () => {
  const [iceCreamData, setIceCreamData] = useState([]);  // State for ice cream data
  const [loading, setLoading] = useState(true);  // State for loading status
  const [error, setError] = useState(null);  // State for error handling

  useEffect(() => {
    const fetchIceCreamData = async () => {
      try {
        const response = await fetch('https://atozicecreamdashboard.onrender.com/product/get-products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setIceCreamData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIceCreamData();
  }, []); 

  // Inline styles for the loading spinner
  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderLeftColor: '#007bff', // Adjust color as needed
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s ease-in-out infinite',
    margin: '20px auto', // Center the spinner
  };

  const loadingContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Full viewport height
    backgroundColor: '#f8f9fa', // Background color
    color: '#212529', // Text color
  };

  // Keyframes for spinner animation
  const spinAnimation = `
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  if (loading) {
    return (
      <div style={loadingContainerStyle}>
        <style>{spinAnimation}</style> {/* Include keyframes for animation */}
        <div style={spinnerStyle}></div> {/* Loading spinner */}
        <p className="text-lg">Loading Ice Cream Menu...</p> {/* Optional loading text */}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;  // Error state
  }

  return (
    <div className="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Our Delicious Ice Cream Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {iceCreamData.map((iceCream, index) => (
          <IceCreamCard key={index} {...iceCream} />
        ))}
      </div>
    </div>
  );
};

export default IceCreamMenu;
