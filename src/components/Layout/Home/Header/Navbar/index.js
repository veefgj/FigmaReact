import classNames from 'classnames/bind';
import styles from './Navbar.module.scss'

const cx = classNames.bind(styles)

function Navbar() {
    return ( 
        <div className={cx('logo')}>
            <a href='#' title='logo' className="">
            <img src="~/asset/icon/logo.png"></img>
            
    </a>
        </div>
     );
}

export default Navbar;