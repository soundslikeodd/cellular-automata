import classNames from "classnames";
import './Square.scss';

const Square = ({
    shaded,
    border = true,
}) => (
    <div 
        className={
            classNames(
                'square',
                shaded && 'shaded',
                border && 'border',
            )
        } 
    />
);

export default Square;
