import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Navbar from "./Navbar";
import bng from "~/asset/bng.png";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header
      className={cx("wrapper")}
      style={{ backgroundImage: `url(${bng})` }}
    >
      <Navbar />
    </header>
  );
}

export default Header;
