import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { Navbar } from '../ui/';
import { useRouter } from 'next/router';


interface LayoutProps {
    title?: string;
  }

  const origin = ( typeof window === 'undefined') ? '' : window.location.origin;


export const Layout: FC <PropsWithChildren<LayoutProps>> = ({children, title}) => {



  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Juan Manuel Mejia" />
            <meta name="description" content={ `Informacion del Pokemon ${title}` }/>
            <meta name="keyword" content={ `Pokemon ${title} dentro del pokedex` }/>
            <meta property="og:title" content={ `Informacion del Pokemon ${title}` } />
            <meta property="og:description" content={ `Informacion del Pokemon ${title}` } />
            <meta property="og:image" content={`${origin}/banner.png`} />
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
