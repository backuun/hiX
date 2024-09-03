import banner from '@/styles/Banner.module.css'
import styles from '@/styles/Layanan.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Comingsoon from '../components/comingsoon'

export default function Instant(){
    return(
        <>
            <Head>
                <title>HiX | Instant</title>
                <meta name="description" content="Solusi Pengiriman yang cepat & Tepat" /> 
            </Head>
            <div className={banner.banner}>
                <img src='../images/instant_banner.png' alt='Lacak Paket HiXpress'/>
            </div>
            <div className={banner.breadcumbs}>
                <p><Link href='/'>Beranda</Link> / Layanan / <span>Instant</span></p>
            </div>
            <div className={styles.content_layout_blue}>
                <div className={styles.text_content}>
                    <h1>Layanan Instant</h1>
                    <p>Layanan Instant dari H! Express dirancang untuk memenuhi kebutuhan pengiriman yang mendesak. Ketika waktu adalah segalanya, kami hadir untuk memastikan paket Anda sampai di tujuan dalam hitungan jam. Tanpa harus menunggu lama, barang Anda akan diambil dan diantar langsung dengan kecepatan maksimal, menjaga urgensi dan pentingnya pengiriman Anda.</p>
                    <p>Selain kecepatan, kami juga mengutamakan keamanan dalam setiap pengiriman. Setiap paket ditangani dengan hati-hati, memastikan barang Anda tiba dalam kondisi sempurna.</p>
                </div>
                <div className={styles.image_content}>
                    <img src='../images/instant_image.png' alt='Layanan Sameday HiXpress'/>
                </div>
            </div>
            <div className={styles.icon_section}>
                <div className={styles.divider}></div>
                <div className={styles.icon_heading}>
                    <h1>Keuntungan Layanan Instant</h1>
                    <p>Layanan Instant dari H! Express memastikan paket Anda tiba beberapa jam dengan kecepatan dan efisiensi maksimal.</p>
                </div>
                <div className={styles.icon_layout}>
                    <div className={styles.icon_box}>
                        <img src='../images/icon_5.svg' alt='Benefit HiXpress'/>
                        <h3>Prioritas Pengiriman</h3>
                        <p>Paket Anda mendapatkan prioritas tinggi, memastikan barang Anda tiba di tujuan secepat mungkin tanpa penundaan.</p>
                    </div>
                    <div className={styles.icon_box}>
                        <img src='../images/icon_2.svg' alt='Benefit HiXpress'/>
                        <h3>Layanan Pelacakan Real-Time</h3>
                        <p>Dengan fitur pelacakan real-time, Anda dapat memantau perjalanan paket Anda setiap saat, memberikan ketenangan pikiran.</p>
                    </div>
                    <div className={styles.icon_box}>
                        <img src='../images/icon_3.svg' alt='Benefit HiXpress'/>
                        <h3>Keamanan Barang Terjamin</h3>
                        <p>Setiap pengiriman ditangani dengan cermat, memastikan barang Anda tetap aman dan utuh selama proses pengiriman.</p>
                    </div>
                    <div className={styles.icon_box}>
                        <img src='../images/icon_4.svg' alt='Benefit HiXpress'/>
                        <h3>Pengiriman Super Cepat</h3>
                        <p>Layanan Instant memastikan paket Anda tiba di tujuan dalam hitungan jam, ideal untuk kebutuhan mendesak.</p>
                    </div>
                </div>
            </div>
            <div className={styles.cta_section}>
                <h1>Bergabunglah Bersama Kami! <br/>Jadilah Mitra H! Express Hari Ini</h1>
                <Link href='https://wa.link/56uhaq' target='blank_'><button>Jadwalkan Pertemuan</button></Link>
            </div>
        </>
    )
}