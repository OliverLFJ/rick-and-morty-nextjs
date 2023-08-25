'use client'
import NavbarComponent from "@/components/navigation/NavbarComponent";
import { useMenuContext } from "@/contexts/MenuContext";
import { Suspense, useEffect } from 'react'

export default function RootLayoutComponent({ children, }: { children: React.ReactNode }) {

    const { setMenuState, menuState } = useMenuContext()

    useEffect(() => {
        const handleScroll = () => {
            setMenuState(false);
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <html lang="en">
            <body>
                <NavbarComponent />
                <Suspense fallback={null}>
                    {children}
                </Suspense>
            </body>
        </html>
    )
}