import { hireUrl } from '@src/config';
import { GetStaticProps, NextPage } from 'next';

const JoinUsPage: NextPage = () => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: hireUrl,
      permanent: true,
    },
  };
};

export default JoinUsPage;
