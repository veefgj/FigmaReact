import classNames from "classnames/bind";
import styles from "./Platforms.module.scss";
import Platform from "./Platform";
import plf1 from "~/asset/icon/plf1.png";
import plf2 from "~/asset/icon/plf2.png";
import plf3 from "~/asset/icon/plf3.png";



const cx = classNames.bind(styles);
function Platforms() {
  return (
    <div className={cx("platforms-wrapper")}>
      <Platform img={plf1} x1="Ease of Trading" h1="Intuitive interface" h2="Instant deposit options" h3="Cash out directly to your bank account" /> 
      <Platform img={plf2} x1="Institutional-grade Security" h1="98% of assets stored safely offline" h2="Highly encrypted personal data" h3="Whitelisting and transaction confirmations" /> 
      <Platform img={plf3} x1="Proven Reliability" h1="Exchanging bitcoin since 2011" h2="Industry-leading uptime" h3="24/7 dedicated support" /> 
    </div>
  );
}

export default Platforms;
