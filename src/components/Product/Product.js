import styles from './Product.module.scss';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0]); 


  console.log(currentSize);

  const handleColor = (color) => {
      setCurrentColor(color);
  }

  const handleSize = (sizeName) => {
    setCurrentSize(sizeName);
  }

  const generateSummary = (e) => {
    e.preventDefault();
    console.log('działa');
    const summaryObject = {
        name: props.title,
        price: getPrice(),
        color: currentColor,
        size: currentSize,
    }
    console.log(summaryObject);
}

  const getPrice = () => {
    const selectedSize = props.sizes.find((size) => size.name === currentSize); // zwraca obiekt (znaleziony w array props.sizes) którego size.name jest takie samo jak w stanie lokalnym ustawionym w handleSize po kliknięciu na button rozmiaru koszulki
    if (selectedSize) { // jeżeli obiekt został znaleziony dodaj cenę dodatkową koszulki do ceny bazowej i zwróć, jak nie to zwróć orygnalną basePrice
      const totalPrice = props.basePrice + selectedSize.additionalPrice;
      return totalPrice;
    }
    return props.basePrice;
  }



  return (
    <article className={styles.product}>
       <div className={styles.imageContainer}>
        <ProductImage name={props.name} color={currentColor} />
       </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm currentColor={currentColor} name={props.title}  setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor} colors={props.colors} sizes={props.sizes} size={currentSize} />
      </div>
      <Button className={styles.button} onClick={generateSummary}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string, 
  colors: PropTypes.array,
  sizes: PropTypes.array, 
}

export default Product;