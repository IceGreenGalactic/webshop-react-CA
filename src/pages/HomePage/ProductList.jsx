import React, { useState } from 'react';
import productImg from '../../assets/images/testImg.jpg';
import { Button } from '../../App.styles';
import { ProductCard, PriceContainer } from './ProductList.styles';

const ProductList = () => {
  // Sample data for test purposes
  const products = [
    { id: 1, title: "Product 1", description: "Description for product 1", price: 100, salePrice: 80, discount: 20 },
    { id: 2, title: "Product 2", description: "Description for product 2", price: 50, salePrice: null, discount: null },
    { id: 3, title: "Product 3", description: "Description for product 3", price: 75, salePrice: 60, discount: 20 },
  ];

  const [searchTerm, setSearchTerm] = useState(''); 

  const handleSearch = () => {
    
    console.log("Searching for:", searchTerm);
    
  };

  return (
    <div>
      <h1 className='text-center my-4'>Welcome to Our Store</h1>
      <div className="input-group mb-4 w-50 m-auto">
        <input
          type="text"
          placeholder="Search for products..."
          className="form-control"
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <Button onClick={handleSearch} className="btn btn-primary">Search</Button> {}
      </div>
      <div className="product-container">
        <div className="row justify-content-evenly">
          {/* Placeholder for product cards */}
          {products.map((product) => (
            <ProductCard key={product.id} className="product-card card col-12 col-sm-5 col-md-4 col-lg-3 text-center m-2">
              <img className="card-img-top img-fluid" src={product.image || productImg} alt={product.title} />
              <h2 className="card-title mt-2">{product.title}</h2>
              <p>{product.description}</p>
              <PriceContainer>
                {product.salePrice ? (
                  <>
                    <span className="text-danger" style={{ textDecoration: 'line-through', display: 'block', height: '30px' }}>
                      Price: ${product.price.toFixed(2)}
                    </span>
                    <span style={{ display: 'block', height: '30px' }}>
                      Sale Price: ${product.salePrice.toFixed(2)}
                    </span>
                    <div className="text-success" style={{ display: 'block', height: '30px' }}>
                      {product.discount}% off
                    </div>
                  </>
                ) : (
                  <span>Price: ${product.price.toFixed(2)}</span>
                )}
              </PriceContainer>
              <Button className='m-4'>View Product</Button>
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
