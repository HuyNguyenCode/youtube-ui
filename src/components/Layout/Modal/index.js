import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal() {
    return (
        <div className={cx('modal')}>
            <div className={cx('modal-overlay')}></div>
        </div>
    );
}

export default Modal;
