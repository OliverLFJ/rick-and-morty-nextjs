import { MenuContextProvider } from "@/contexts/MenuContext"
import "./../styles/globals.css"
import RootLayoutComponent from "./root/RootLayoutComponent"
export const metadata = {
  title: 'Rick & Morty App',
  description: 'Rick & Morty App',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {


  return (
    <MenuContextProvider>
      <RootLayoutComponent children={children} />
    </MenuContextProvider>
  )
}
