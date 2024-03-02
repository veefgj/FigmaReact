import classNames from "classnames/bind";
import styles from "./Platform.module.scss";

const cx = classNames.bind(styles);

function Platform({img, x1, h1, h2, h3}) {
  return (
    <div className={cx("platform-wrapper")}>
      <a href="#" title="plf1" className="">
        <img src={img}></img>
      </a>
      <div>{x1}</div>
      <div>
        <h3>{h1}</h3>
        <h3>{h2}</h3>
        <h3>{h3}</h3>
      </div>
    </div>
  );
}

export default Platform;
