import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0]); 

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const handleColor = (color) => {
      setCurrentColor(color);
  }

  const handleSize = (sizeName) => {
    setCurrentSize(sizeName);
  }

  const getPrice = () => {
    const selectedSize = props.sizes.find((size) => size.name === currentSize); // zwraca obiekt (znaleziony w array props.sizes) którego size.name jest takie samo jak w stanie lokalnym ustawionym w handleSize po kliknięciu na button rozmiaru koszulki
    if (selectedSize) { // jeżeli obiekt został znaleziony dodaj cenę dodatkową koszulki do ceny bazowej i zwróć, jak nie to zwróć orygnalną basePrice
      const totalPrice = props.basePrice + selectedSize.additionalPrice;
      return totalPrice;
    }
    return props.basePrice;
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

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (<li><button type="button" onClick={() => {handleSize(size.name)}} className={clsx(currentSize === size.name && styles.active)}>{size.name}</button></li>))}
              {/* {props.sizes.map((size))} */}
              {/* <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li> */}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (<li><button type="button" onClick={() => {handleColor(color)}} className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} /></li>))}
              {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}
            </ul>
          </div>
          <Button className={styles.button} onClick={generateSummary}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
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