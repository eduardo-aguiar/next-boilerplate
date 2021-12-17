import { InferGetStaticPropsType } from 'next';

import getAllProducts from '../utils/FetchTrainning';

export const getStaticProps = async () => {
  const posts = await getAllProducts();

  return {
    props: {
      posts,
    },
  };
};

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const router = useRouter();

  return (
    <>
      <p>Eita</p>
      <p>{JSON.stringify(posts)}</p>
    </>
  );
};

export default Index;
