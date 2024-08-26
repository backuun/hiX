import banner from '@/styles/Banner.module.css'
import styles from '@/styles/Layanan.module.css'
import Link from 'next/link'

export default function Sameday(){
    return(
        <>
            <div className={banner.banner}>
                <img src='../images/sameday_banner.png' alt='Lacak Paket HiXpress'/>
            </div>
            <div className={banner.breadcumbs}>
                <p><Link href='/'>Beranda</Link> / Layanan / <span>Sameday</span></p>
            </div>
        </>
    )
}