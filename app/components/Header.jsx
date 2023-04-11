import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Devabdurabi </Link>
        </div>
        <div className="links">
          <Link className="mr-4 font-bold text-zinc-500" href="/about">
            About
          </Link>
          <Link className="mr-4 font-bold text-zinc-500" href="/about/team">
            Our Team
          </Link>
          <Link className="mr-4 font-bold text-zinc-500" href="/code/repos">
            Code
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
