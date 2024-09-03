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
            <div className={styles.content_layout}>
                <div className={styles.image_content}>
                    <img src='../images/sameday_image.png' alt='Layanan Sameday HiXpress'/>
                </div>
                <div className={styles.text_content}>
                    <h1>Layanan Sameday</h1>
                    <p>Layanan Sameday dari hiXpress adalah solusi pengiriman cepat yang dirancang untuk memenuhi kebutuhan mendesak Anda. Dengan layanan ini, paket Anda akan tiba di tujuan dalam waktu yang sama pada hari pengiriman, memberikan kecepatan dan efisiensi yang luar biasa.</p>
                    <p>Dilengkapi dengan pelacakan real-time, Anda dapat memantau perjalanan paket dari awal hingga tiba di tangan penerima. hiXpress juga memastikan keamanan setiap pengiriman dengan prosedur penanganan khusus, sehingga barang Anda tiba dalam kondisi sempurna.</p>
                </div>
            </div>
            <div className={styles.icon_section}>
                <div className={styles.divider}></div>
                <div className={styles.icon_heading}>
                    <h1>Keuntungan Layanan Sameday</h1>
                    <p>Layanan Sameday dari H! Express memastikan paket Anda tiba di tujuan pada hari yang sama dengan kecepatan dan efisiensi maksimal.</p>
                </div>
                <div className={styles.icon_layout}>
                    <div className={styles.icon_box}>
                        <img src='../images/icon_1.svg' alt='Benefit HiXpress'/>
                        <h3>Harga Kompetitif</h3>
                        <p>H! Express menawarkan tarif pengiriman yang terjangkau, memberikan nilai terbaik bagi pelanggan tanpa mengorbankan kualitas layanan.</p>
                    </div>
                    <div className={styles.icon_box}>
                        <img src='../images/icon_2.svg' alt='Benefit HiXpress'/>
                        <h3>Layanan Pelacakan Real-Time</h3>
                        <p>Anda dapat memantau status pengiriman paket Anda secara langsung melalui fitur pelacakan kami, memberikan ketenangan pikiran sepanjang proses pengiriman.</p>
                    </div>
                    <div className={styles.icon_box}>
                        <img src='../images/icon_3.svg' alt='Benefit HiXpress'/>
                        <h3>Keamanan Barang Terjamin</h3>
                        <p>Setiap paket ditangani dengan hati-hati, menggunakan metode pengemasan yang aman untuk memastikan barang tiba dalam kondisi sempurna.</p>
                    </div>
                    <div className={styles.icon_box}>
                        <img src='../images/icon_4.svg' alt='Benefit HiXpress'/>
                        <h3>Pengiriman Super Cepat</h3>
                        <p>Dengan layanan Sameday dan Instant Delivery, H! Express memastikan paket Anda tiba di tujuan dengan sangat cepat, bahkan di hari yang sama.</p>
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