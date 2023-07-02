import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
// import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import {
    faAngleRight,
    faBars,
    faCircleQuestion,
    faClockRotateLeft,
    faEllipsisVertical,
    faExclamation,
    faExclamationCircle,
    faGear,
    faGlobe,
    faKeyboard,
    faLanguage,
    faMagnifyingGlass,
    faMicrophone,
    faMoon,
    faShield,
    faUser,
    faUserShield,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PropperWrapper } from '~/components/Layout/Propper';
import Button from '~/components/Button';
import Menu from '../../Propper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    [
        {
            icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faUserShield}></FontAwesomeIcon>,
            title: 'Your Data in YouTube ',
            href: 'https://accounts.google.com/',
        },
    ],
    [
        {
            icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faMoon}></FontAwesomeIcon>,
            arrowIcon: <FontAwesomeIcon className={cx('menu-icon')} icon={faAngleRight}></FontAwesomeIcon>,
            title: 'Appearance: Device theme',
            children: {
                title: 'Appearance',
                subtitle: 'Setting applies to this browser only',
                data: [
                    {
                        code: 'option_1',
                        title: 'Use device theme',
                    },
                    {
                        code: 'option_2',
                        title: 'Dark theme',
                    },
                    {
                        code: 'option_3',
                        title: 'Light theme',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faLanguage}></FontAwesomeIcon>,
            arrowIcon: <FontAwesomeIcon className={cx('menu-icon')} icon={faAngleRight}></FontAwesomeIcon>,
            title: 'Language: English ',
            children: {
                title: 'Chose your language',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faShield}></FontAwesomeIcon>,
            arrowIcon: <FontAwesomeIcon className={cx('menu-icon')} icon={faAngleRight}></FontAwesomeIcon>,
            title: 'Restricted Mode: Off',
            children: {
                title: 'Restricted Mode',
                data: [
                    {
                        code: 'des-1',
                        title: 'This helps hide potentially mature videos. No filter is 100% accurate.',
                    },
                    {
                        code: 'des-2',
                        title: 'This setting only applies to this browser.',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faGlobe}></FontAwesomeIcon>,
            arrowIcon: <FontAwesomeIcon className={cx('menu-icon')} icon={faAngleRight}></FontAwesomeIcon>,
            title: 'Location: Vietnam',
            children: {
                title: 'Chose your location',
                data: [
                    {
                        code: 'en',
                        title: 'US',
                    },
                    {
                        code: 'vn',
                        title: 'Vietnam',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faKeyboard}></FontAwesomeIcon>,
            title: 'Keyboard shortcuts',
        },
    ],
    [
        {
            icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faGear}></FontAwesomeIcon>,
            title: 'Setting',
            href: 'https://accounts.google.com/',
        },
    ],
    [
        {
            icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faCircleQuestion}></FontAwesomeIcon>,
            title: 'Help',
        },
        {
            icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faExclamationCircle}></FontAwesomeIcon>,
            title: 'Send feedback',
        },
    ],
];

console.log(images.logo);

function Header() {
    const [searchResults, setSearchResults] = useState([]);

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2, 3]);
        }, 0);
    }, []);


    //handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div id={cx('start')}>
                    <button className={cx('menu-btn')}>
                        <FontAwesomeIcon className={cx('menu-icon')} icon={faBars}></FontAwesomeIcon>
                    </button>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="YouTube" />
                    </div>
                </div>
                <div id={cx('center')}>
                    <div className={cx('search-container')}>
                        <Tippy
                            visible={visible}
                            interactive
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PropperWrapper>
                                        {
                                            <ul>
                                                {searchResults.map((searchResult, index) => {
                                                    return (
                                                        <li className={cx('search-item')} key={index}>
                                                            <div className={cx('search-result-wrapper')}>
                                                                <div className={cx('clock-icon')}>
                                                                    <FontAwesomeIcon
                                                                        icon={faClockRotateLeft}
                                                                    ></FontAwesomeIcon>
                                                                </div>
                                                                <h3 className={cx('search-title')}>{searchResult}</h3>
                                                            </div>
                                                            <Button text>Remove</Button>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        }
                                    </PropperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('search-box')}>
                                <button className={cx('search-toggle')}>
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        className={cx('search-toggle-icon')}
                                    ></FontAwesomeIcon>
                                </button>
                                <div className={cx('search-wrapper')}>
                                    <input
                                        placeholder="Search"
                                        spellCheck={false}
                                        onFocus={searchResults.length > 0 ? show : hide}
                                        onBlur={hide}
                                    ></input>
                                    <button className={cx('clear-btn')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('clear-btn-icon')}
                                        ></FontAwesomeIcon>
                                    </button>

                                    <Tippy
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('popup')} tabIndex="-1" {...attrs}>
                                                Search
                                            </div>
                                        )}
                                    >
                                        <button className={cx('search-btn')}>
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlass}
                                                className={cx('search-btn-icon')}
                                            ></FontAwesomeIcon>
                                        </button>
                                    </Tippy>
                                </div>
                            </div>
                        </Tippy>
                    </div>

                    <Tippy
                        interactive
                        render={(attrs) => (
                            <div className={cx('popup')} tabIndex="-1" {...attrs}>
                                Search with your voice
                            </div>
                        )}
                    >
                        <button className={cx('micro-btn')}>
                            <FontAwesomeIcon icon={faMicrophone} className={cx('micro-btn-icon')}></FontAwesomeIcon>
                        </button>
                    </Tippy>
                </div>
                <div id={cx('end')}>
                    <Menu itemsArr={MENU_ITEM} onChange={handleMenuChange}>
                        <Tippy
                            interactive
                            render={(attrs) => (
                                <div className={cx('popup')} tabIndex="-1" {...attrs}>
                                    Settings
                                </div>
                            )}
                        >
                            <button className={cx('settings-btn')}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    className={cx('settings-btn-icon')}
                                ></FontAwesomeIcon>
                            </button>
                        </Tippy>
                    </Menu>

                    <Button
                        onClick={() => console.log(Math.random())}
                        medium
                        primary
                        leftIcon={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
                    >
                        <span>Sign in</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
