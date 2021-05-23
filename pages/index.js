import Head from 'next/head'
import Link from 'next/link'
import s from '../styles/pages/blog.module.scss'
import MainContainer from '../components/MainContainer/MainContainer'

export default function Home({posts}) {
  return (
    <MainContainer description="Блог по разработке"
                   keywords="полезные ссылки js"
    >
      <div className="container">
        <div className={s.header}>
          <h1>Блог</h1>
          <button className="btn">Добавить</button>
        </div>
      </div>
      <section className={s.content}>
        <div className="container">
          <div className={s.items}>
            {
              posts.map((post, i) => (
                <Link href={`/post/[id}]`} as={`/post/${post._id}`} key={i}>
                  <a className={s.post}>
                    <div>
                      <img src={post.imgUrl} alt=""/>
                    </div>
                    <h3>{post.title}</h3>
                  </a>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </MainContainer>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://blog-next-server.herokuapp.com/api/post`)
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {posts}
  }
}
