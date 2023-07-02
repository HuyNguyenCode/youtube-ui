import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function SubTitle({ children}) {
    return (
        <Fragment>
            <div className={cx('subtitle')}>
                {children}
            </div>
        </Fragment>
    );
}

export default SubTitle;
