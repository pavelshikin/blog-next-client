import Navbar from '../Navbar/Navbar'
import Head from 'next/head'

export default function MainContainer({children, title, keywords, description}) {
  return (
    <>
      <Head>
        <meta name="description" content={description ? description : ''} />
        <meta name="keywords" content={keywords ? keywords : ''} />
        <title>{title ? title : 'BLOG NEXT'}</title>
      </Head>
      <Navbar/>
      <div className="main">{children}</div>
    </>
  )
}