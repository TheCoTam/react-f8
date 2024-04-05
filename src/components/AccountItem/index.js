import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avt')}
                src="https://avatars.githubusercontent.com/u/139200791?s=400&u=15cb9dcb2b47f557ff086155571e3f645f734f0b&v=4"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Van A
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Dwaf</span>
            </div>
        </div>
    );
}

export default AccountItem;