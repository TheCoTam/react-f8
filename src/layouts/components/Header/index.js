import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { CoinIcon, HelpIcon, InboxIcon, LanguageIcon, LogoutIcon, MessageIcon, ProfileIcon, SettingsIcon, ShortcutsIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const MENU_ICON = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ]
        }
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <ShortcutsIcon />,
        title: 'keyboard shortcuts',
    },
]

let currentUser = true;

function Header() {

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'View profile',
            to: '/@nguyenvana',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <SettingsIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ICON,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('logo-link')}><img src={images.logo} alt='Tiktok' /></Link>

            <Search />

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 100]} content="Upload video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 100]} content="Message" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 100]} content="Inbox" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary >Log in</Button>

                    </>
                )}
                <Menu
                    items={currentUser ? userMenu : MENU_ICON}
                    onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src='https://avatars.githubusercontent.com/u/139200791?s=400&u=15cb9dcb2b47f557ff086155571e3f645f734f0b&v=4'
                            alt='Nguyễn Văn A'
                        // fallback="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/291634442_870845310542819_2766825368096031807_n.jpg?stp=c5.6.242.242a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeExDA-LZ5TPAs6GChtcZY3apBez_gtMU3WkF7P-C0xTdaU_JGwffZDNocFjR3KMX3To9Io6UFF1uw-Be2sb-XRD&_nc_ohc=T1bOwu8nYBIAb4XGQhT&_nc_ht=scontent.fhan14-3.fna&oh=00_AfAQ83u7eNYRfT8tzCE0F0J9ZibIop856I5GexJaGcAidQ&oe=661C949D"
                        />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>

        </div>
    </header>;
}

export default Header;