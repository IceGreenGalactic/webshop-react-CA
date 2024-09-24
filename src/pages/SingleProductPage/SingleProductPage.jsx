import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../../api/apiCalls';


const SingleProductPage = () => {
    const { productId } = useParams(); // Use useParams to get productId from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getProduct = async () => {
        try {
          const response = await fetchSingleProduct(productId); // Fetching the product
          console.log('API Response:', response); // Log the API response for debugging
          
          // Check if the response has the expected structure
          if (response && response.data) {
            setProduct(response.data); // Set the product data
          } else {
            throw new Error('Product data not found in response');
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      getProduct();
    }, [productId]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error fetching product: {error}</p>;
    }
  
    // Check if product exists
    if (!product) {
      return <p>No product found.</p>; 
    }
  
    return (
      <div>
        <h1>{product.title}</h1>
        <img src={product.image.url} alt={product.image.alt} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {product.discountedPrice && (
          <p>Discounted Price: ${product.discountedPrice}</p>
        )}
      </div>
    );
  };
  
  export default SingleProductPage;