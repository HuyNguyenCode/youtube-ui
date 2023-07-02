import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Fragment } from 'react';
import ReactSwitch from 'react-switch';
import ToggleSwitch from './ToggleSwitch';

const cx = classNames.bind(styles);

function Restricted({ children, datas=[]}) {
    return (
        <div className={cx('restricted-wrapper')}>
            {
                datas.map((data, index) => {
                    return (
                        <div key={index} className={cx('restricted-description')}>{data.title}</div>
                    )
                })
            }
        <div className={cx('restricted-active')}>
            <div className={cx('active-des')}>
                ACTIVATE RESTRICTED MODE
            </div>
            
            <ToggleSwitch className={cx('active-toggle')}/>

        </div>
        </div>
    );
}

export default Restricted;
