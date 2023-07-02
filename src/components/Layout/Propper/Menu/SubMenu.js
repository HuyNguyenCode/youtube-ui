import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Header from './Header';
import { Fragment } from 'react';
import SubTitle from './SubTitle';

const cx = classNames.bind(styles);

function SubMenu({ children, title, onBack, subTitle, resticted_mode }) {
    return (
        <Fragment>
            <Header title={title} onBack={onBack}/>
            <div className={cx('page-menu-item-renderer')}>
                {subTitle && <SubTitle>{subTitle}</SubTitle> }
                {children}
            </div>
        </Fragment>
    );
}

export default SubMenu;
