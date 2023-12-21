import Link from "next/link";
import home from "../../assets/home.png";
import classes from "./main-header.module.css";
import Image from "next/image";

function MainHedaer() {
  return (
    <hedader className={classes.hedader}>
      <nav className={classes.nav}>

        <div className={classes.logo}>
          <Link href="/">
            <Image src={home} alt="go home" priority />
          </Link>
          <Link href="">로그인</Link>
        </div>

        <ul>
          <li>
            <Link href="/fanletter">팬레터</Link>
          </li>
          <li></li>
        </ul>

      </nav>
    </hedader>
  );
}

export default MainHedaer;
