import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

CSR.getLayout = function getLayout(page) {
  console.log(page);
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
export default function CSR() {
  const [time, setTIme] = useState();
  useEffect(() => {
    setTIme(new Date().toISOString());
  }, []);
  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  );
}
