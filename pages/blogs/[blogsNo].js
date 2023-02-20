import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
// import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const rabees = await response.json();

  const paths = rabees.map((curElem) => {
    return {
      params: {
        blogsNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };

};
export const getStaticProps = async (context) => {
  const id = context.params.blogsNo;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const rabees = await response.json();

  return {
    props: {
      rabees,
    },
  };
};

function blogsNo({ rabees }) {
  // const router = useRouter();
  // const BlogNumber = router.query.blogsNo;
  // const styles = styles();
  return (

    <div className={styles.aboutpagecontainer}>
      <Head>
        <title>Show Api</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br /><br /><br />
      <h1 className={styles.title}>You Will See Your Api Results Here</h1>
      <div key={rabees.id} className={styles.apimaindiv}>
        <h1 className={styles.title}>No (* {rabees.id} *)</h1>
        <h2 className={styles.ratitle}>{rabees.name}</h2>

        <h2 className={styles.ratitle}>{rabees.username}</h2>
        <h2 className={styles.ratitle}>{rabees.email}</h2>

        {/* <h2 className={styles.ratitle}>{rabees.address}</h2> */}
        <h2 className={styles.ratitle}>{rabees.phone}</h2>

        <h2 className={styles.ratitle}>{rabees.website}</h2>
        {/* <h2 className={styles.ratitle}>{rabees.company}</h2> */}


      </div>
      <center> 
      <button className={styles.mainbtn}>
        <Link href="/new">
          Main Page
        </Link>
      </button>
      </center>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
        }       
      `}</style>

    </div>
  );
}

export default blogsNo;
