import '../styles/globals.scss';
import Layout from '../components/layout';
import youtubeImg from '../public/preview.png';
import Image from 'next/image';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
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
