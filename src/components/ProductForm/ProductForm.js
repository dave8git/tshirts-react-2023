import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import styles from './ProductForm.module.scss';
import clsx from 'clsx';

const ProductForm = props => {
    const prepareColorClassName = color => {
        return 'color' + color[0].toUpperCase() + color.substr(1).toLowerCase();
    }
    console.log('props', props.currentColor);
    console.log('props.colors', props.colors);
    return (
        <form>
            <OptionSize setCurrentSize={props.setCurrentSize} sizes={props.sizes} size={props.size} />
            <OptionColor setCurrentColor={props.setCurrentColor} colors={props.colors} colorModule={props.currentColor} setColorFunc={prepareColorClassName} />
        </form>
    )
};

export default ProductForm;