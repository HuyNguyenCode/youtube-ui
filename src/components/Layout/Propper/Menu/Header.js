import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {

    return (
        <header className={cx('header')}>
            <div className={cx('header-wrapper')}>
                <button onClick={onBack} className={cx('back-btn')}>
                    <FontAwesomeIcon icon={faArrowLeft} className={cx('back-icon')}></FontAwesomeIcon>
                </button>
                <h4 className={cx('header-title')}>{title}</h4>
            </div>
        </header>
    );
}

export default Header;
