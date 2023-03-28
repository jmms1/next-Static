import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { Navbar } from '../ui/';


interface LayoutProps {
    title?: string;
  }


export const Layout: FC <PropsWithChildren<LayoutProps>> = ({children, title}) => {

  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Juan Manuel Mejia" />
            <meta name="description" content="Informacion del Pokemon XXXX " />
            <meta name="keyword" content="Pokemon, XXXX, pokedex " />
        </Head>
        <Navbar/>
        <main style={{
            padding: '0px 20px' 
        }}>
            {children}
        </main>
    </>
  )
}
