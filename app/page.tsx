"use client"
import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from '@/components/images/image-slideshow'

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>IM ON THE NEXTLEVEL</h1>
            <p>에스파 짱짱</p>
          </div>
          <div className={classes.cta}>
            <Link href={"/signup"}>회원가입</Link>
            <Link href={"/login"}>로그인</Link>
          </div>
        </div>
      </header>
      <main>
        <h1>여기에 메인 </h1>
      </main>
    </>
  );
}
