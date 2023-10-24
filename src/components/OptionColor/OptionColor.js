import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => {
    console.log("props.setColorFunc", props.setColorFunc);
    console.log("props.colorModule", props.colorModule);
    console.log(props.setColorFunc(props.colorModule));
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {props.colors.map((color) => (
                    <li><button 
                        type="button" 
                        onClick={() => { props.setCurrentColor(color) }} 
                        className={clsx(styles[props.setColorFunc(color)], color === props.colorModule && styles.active)} 
                        />
                    </li>))}
                {/* { props.colors.map((color) => (<li><button type="button" onClick={() => { props.setCurrentColor(color)}} className={clsx( prepareColorClassName(props.currentColor)    /></li>))} */}
                {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
                <li><button type="button" className={clsx(styles.colorRed)} /></li>
                <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}
            </ul>
        </div>
    );

};

OptionColor.propTypes = {
    setCurrentColor: PropTypes.func,
    colors: PropTypes.string,
    colorModule: PropTypes.string,
    setColorFunc: PropTypes.func,
}


export default OptionColor;