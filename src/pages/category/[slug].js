import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';

export default function CategorySlug() {
  const router = useRouter();
  console.log(router.query);
  const { slug, from, age } = router.query;
  return (
    <>
      <h1 className="title">
        Category {slug} from {from} {age}
      </h1>
    </>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
