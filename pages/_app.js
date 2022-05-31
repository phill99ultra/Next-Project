import Head from 'next/head';
import '../styles/globals.scss';
import Layout from '../components/layout';
import youtubeImg from '../public/preview.png';
import Image from 'next/image';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Image
        src={youtubeImg}
        width={500}
        height={350}
        alt="preview"
        placeholder='blur'
      />
    </Layout>
  )
}

export default MyApp
