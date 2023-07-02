import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { faL } from '@fortawesome/free-solid-svg-icons';

function Button({
    to,
    href,
    onClick,
    medium = false,
    large = false,
    small = false,
    primary = false,
    text = false,
    disable = false,
    square = false,
    menu_button = false,
    children,
    leftIcon,
    rightIcon,
    middleIcon,
    className,
    ...passProps
}) {
    let cx = classNames.bind(styles);

    const classes = cx('wrapper', {
        primary,
        medium,
        large,
        small,
        text,
        disable,
        square,
        middleIcon,
        menu_button,
        [className]: className,
    });

    let Comp = 'button';

    const props = {
        ...passProps,
    };

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof [key] === 'function') {
                delete props[key];
            }
        });
        // delete props.onClick;
    }

    if (href) {
        props.href = href;
        Comp = 'a';
    } else if (to) {
        props.to = to;
        Comp = Link;
    } else if (onClick) {
        props.onClick = onClick;
    } else if (text) {
        Comp = 'span';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {middleIcon && <span>{middleIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('right_icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
