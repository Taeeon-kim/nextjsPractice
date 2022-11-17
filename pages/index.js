import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps() {
  console.log("server");
  return {
    props: { time: new Date().toISOString() }, // 형식에 맞ㅝㅓ props 라는 것으로 내보내야함
  };
}

export default function Home({ time }) {
  console.log(time);
  return (
    <>
      <h1>{time}</h1>
      <h1>
        <Link href="/csr">CSR 로</Link>
        <br />
        <Link href="/ssg">SSG 로</Link>
        <br />
        <Link href="/isr">ISR 로</Link>
      </h1>
    </>
  );
}
