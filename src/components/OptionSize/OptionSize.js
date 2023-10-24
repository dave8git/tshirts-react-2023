import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {
    console.log(props);
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizes.map((size) => (<li><button type="button" onClick={() => { props.setCurrentSize(size.name) }} className={clsx(props.size === size.name && styles.active)}>{size.name}</button></li>))}
                {/* {props.sizes.map((size))} */}
                {/* <li><button type="button" className={styles.active}>S</button></li>
            <li><button type="button">M</button></li>
            <li><button type="button">L</button></li>
            <li><button type="button">XL</button></li> */}
            </ul>
        </div>
    );

};

OptionSize.propTypes = {
    size: PropTypes.string, 
    setCurrentSize: PropTypes.func,
    sizes: PropTypes.array, 
  }
  

export default OptionSize;