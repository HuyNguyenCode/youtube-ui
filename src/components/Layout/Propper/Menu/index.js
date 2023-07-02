import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';
import { Wrapper as PropperWrapper } from '~/components/Layout/Propper';
import MenuItem from '../../MenuItem';
import { Fragment, useState } from 'react';
import Header from './Header';
import Feedback from './Feedback';
import Appearance from './SubMenu';
import SubMenu from './SubMenu';
import Restricted from './Restricted';

const cx = classNames.bind(styles);

const defaultFN = () => {};

function Menu({ children, itemsArr = [], onChange = defaultFN }) {
    const [visible, setVisible] = useState(false);
    const show = () => {
        setVisible(true);
    };
    const hide = () => {
        setVisible(false);
    };

    const [history, setHistory] = useState([{ data: itemsArr }]);

    const current = history[history.length - 1];
    console.log(current);


    return (
        <Tippy
            placement="bottom-end"
            visible
            interactive
            triggerTarget={[...document.getElementsByClassName('.settings-btn')]}
            trigger={'click'}
            allowHTML={true}
            hideOnClick={true}
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-wrapper')}>
                        {history.length > 1 ? (
                            <SubMenu
                                title={current.title}
                                subTitle={current.subtitle}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            >
                                {current.title === 'Restricted Mode' ? <Restricted datas={current.data} ></Restricted> : current.data.map((items, index) => {
                                    // console.log(current.data);
                                    // console.log(items);

                                    // current => object đã được push vào => current = item.children 
                                    // current.data => Mảng data bên trong object children 
                                    // items => các object bên trong mảng này
                                    // console.log(items);
                                    return <MenuItem key={index} data={items} />;
                                })}
                            </SubMenu>
                        ) : (
                            current.data.map((items, index) => {
                                return (
                                    <div className={cx('page-menu-renderer')} key={index}>
                                        {Array.from(items).map((item, index) => {
                                            const isChildren = !!item.children;
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    data={item}
                                                    onClick={() => {
                                                        if (isChildren) {
                                                            setHistory((prev) => [...prev, item.children]);
                                                        } else  {
                                                            onChange(item)
                                                        }
                                                    }}
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            })
                        )}
                    </PropperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
