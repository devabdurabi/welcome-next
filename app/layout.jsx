import Header from "./components/Header"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ['400', '700' ],
  subsets: ['latin'],
})

export const metadata = {
  title: "ChatGPT - Next App",
  description:
    "In deze project ga ik mijn next project oppakken en hiermee kan je je seo verbeteren",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        <Header />

        <main className="container">{children}</main>
        </body>
    </html>
  )
}
