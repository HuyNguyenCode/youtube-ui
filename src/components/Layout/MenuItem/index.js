import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {

    return (
        <div className={cx("wrapper")}>            
            <Button menu_button leftIcon={data.icon} rightIcon={data.arrowIcon} href={data.href} onClick={onClick} className={cx('button-menu')}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
