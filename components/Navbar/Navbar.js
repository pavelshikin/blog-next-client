import Link from "next/link"
import s from '../../styles/components/nav.module.scss'

export default function Navbar() {
  return (
    <nav className={s.header}>
      <div className="container">
        <div className={s.logo}>
          <Link href="/">
            <div>NEXT BLOG</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}