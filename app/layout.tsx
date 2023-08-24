import NavbarComponent from "../components/navigation/NavbarComponent"
import "./../styles/globals.css"
export const metadata = {
  title: 'Rick & Morty App',
  description: 'Rick & Morty App',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavbarComponent />
        {children}
      </body>
    </html>
  )
}
