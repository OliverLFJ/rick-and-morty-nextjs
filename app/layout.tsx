import { MenuContextProvider, useMenuContext } from "@/contexts/MenuContext"
import "./../styles/globals.css"
import NavbarComponent from "@/components/navigation/NavbarComponent"

export const metadata = {
  title: 'Rick & Morty App',
  description: 'Rick & Morty App',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <MenuContextProvider>
      <html lang="en">
        <body>
          <NavbarComponent />
          {children}
        </body>
      </html>
    </MenuContextProvider>
  )
}
