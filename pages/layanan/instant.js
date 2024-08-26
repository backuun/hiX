import banner from '@/styles/Banner.module.css'
import styles from '@/styles/Layanan.module.css'
import Link from 'next/link'

export default function Instant(){
    return(
        <>
            <div className={banner.banner}>
                <img src='../images/instant_banner.png' alt='Lacak Paket HiXpress'/>
            </div>
            <div className={banner.breadcumbs}>
                <p><Link href='/'>Beranda</Link> / Layanan / <span>Instant</span></p>
            </div>
        </>
    )
}