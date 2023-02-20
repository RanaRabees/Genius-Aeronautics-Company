import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import { useRouter } from "next/router";

export const getStaticProps = async () => {

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const rabees = await response.json();
  return {
    props: {
      rabees,
    },
  };
};

const aboutus = ({ rabees }) => {
  // function aboutus({rabees}) {
  // const router = useRouter;
  // const styles = styles();
  return (
    <div className={styles.aboutpagecontainer}>
      <Head>
        <title>Api</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        You Can Put Your   <a href="https://ranarabees.pythonanywhere.com/">Api </a>Url Here
      </h1>
      <br />
      {rabees.slice(0, 10).map((curElem) => {
        return (
          <div key={curElem.id} className={styles.apimaindiv}>
            <h3>(* {curElem.id} *)</h3>
            <Link href={`/blogs/${curElem.id}`}><h2 className={styles.ninagauser}>{curElem.username}</h2></Link>
          </div>
        );
      })}

      <center>
        <button className={styles.mainbtn}>
          <Link href="/">
            Main Page
          </Link>
        </button>
      </center>
    </div>
  );
}

export default aboutus;

