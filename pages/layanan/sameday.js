import banner from '@/styles/Banner.module.css'
import styles from '@/styles/Layanan.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Sameday(){
    return(
        <>
            <Head>
                <title>HiX | Sameday</title>
                <meta name="description" content="Solusi Pengiriman yang cepat & Tepat" /> 
            </Head>
            <div className={banner.banner}>
                <img src='../images/sameday_banner.png' alt='Lacak Paket HiXpress'/>
            </div>
            <div className={banner.breadcumbs}>
                <p><Link href='/'>Beranda</Link> / Layanan / <span>Sameday</span></p>
            </div>
        </>
    )
}