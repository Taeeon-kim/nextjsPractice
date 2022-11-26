import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CartDateSlug() {
  const router = useRouter();
  const { date } = router.query;

  return (
    <>
      <h1 className="title">{JSON.stringify(date)} Slug</h1>
      <Link href="/cart/2022/06/05">2022년 6월 5일로</Link>
      <br />
      <button onClick={() => router.push('/cart/2022/06/24')}>
        2022년 6월 24일로
      </button>
    </>
  );
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
