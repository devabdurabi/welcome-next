import Link from "next/link"
import React from "react"

const HomePage = () => {
  return (
    <div>
      <h1>Welcome To My World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea
        tempore ipsa expedita velit adipisci numquam vero, sed veniam nulla,
        blanditiis eos.
      </p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
