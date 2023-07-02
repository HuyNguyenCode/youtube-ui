import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Feedback({ title, onBack }) {

    return (
        <div className={cx('feedback')}>
            <div className={cx('feedback-header')}>
                <h1 className={cx('feedback-title')}>
                    Send feedback to YouTube
                </h1>
                <button className={cx('close-icon')}>
                    <FontAwesomeIcon icon={faXmark}  className={cx('close-btn')}></FontAwesomeIcon>
                </button>
            </div>
            <div className={cx('feedback-wrapper')}>
                
            </div>
        </div>
    );
}

export default Feedback;
