import classNames from "classnames/bind";

import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import config from "~/config";
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>  
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </div>
    )
}

export default Sidebar