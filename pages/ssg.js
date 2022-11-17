import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export async function getStaticProps() {
  console.log("server");
  return {
    props: { time: new Date().toISOString() }, // 형식에 맞ㅝㅓ props 라는 것으로 내보내야함
  };
}

export default function SSG({ time }) {
  return (
    <>
      <h1>{time}</h1>
    </>
  );
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
