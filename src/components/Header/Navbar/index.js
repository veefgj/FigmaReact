import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import logo from "~/asset/icon/logo.png";

const cx = classNames.bind(styles);

function Navbar() {
  return (
    <div className={cx("logo")}>
      <a href="#" title="logo" className="">
        <img src={logo}></img>
      </a>
     <div>
        
     </div>
    </div>
  );
}

export default Navbar;
