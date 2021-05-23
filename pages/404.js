import MainContainer from '../components/MainContainer/MainContainer'
import Router from 'next/router'

export default function Error() {
  return (
    <MainContainer>
      <div className="container mt-3">
        <h1 className="text-center">404</h1>
        <h1 className="text-center">PAGE NOT FOUND</h1>
        <div className="mt-2 text-center">
          <button className="btn" onClick={() => Router.back()}>Назад</button>
        </div>
      </div>
    </MainContainer>
  )
}
