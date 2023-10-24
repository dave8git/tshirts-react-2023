import styles from './ProductImage.module.scss';

const ProductImage = props => {
   
        return(<img
            className={styles.image}
            alt="Kodilla shirt"
            src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`} />)


};

export default ProductImage;