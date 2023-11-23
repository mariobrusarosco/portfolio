import Image from "next/image";
import styles from "./page.module.css";
import heroMobile from "../../public/hero-mobile.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Mario Brusarosco</h1>

      <ul>
        <li>
          <Link href={"/skills"}>skills</Link>
        </li>
        <li>
          <Link href={"/experience"}>experience</Link>
        </li>
      </ul>

      <Image
        src={heroMobile}
        alt="Hero Mobile"
        placeholder="blur"
        priority
        sizes="100vw"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </main>
  );
}
