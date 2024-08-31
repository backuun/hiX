import Head from "next/head"
import banner from '@/styles/Banner.module.css'
import Link from "next/link"
import styles from "@/styles/Blog.module.css"
import { FaStickyNote } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BsInboxesFill } from "react-icons/bs";


export default function ArtikelDetail(){
    return(
        <>
            <Head>
                <title>HiX | Lorem Ipsum dolor</title>
                <meta name="description" content="Solusi Pengiriman yang cepat & Tepat" /> 
            </Head>
            <div className={banner.banner}>
                <img src='../images/artikel_banner.png' alt='Lacak Paket HiXpress'/>
            </div>
            <div className={banner.breadcumbs}>
                <p><Link href='/'>Beranda</Link> / <Link href='/'>Artikel</Link> / <span>Lorem Ipsum Dolor</span></p>
            </div>
            <div className={styles.blog_detail_container}>
                <div className={styles.divider_bottom}></div>
                <div className={styles.blog_detail_container_layout}>
                    <div className={styles.blog_detail_image}>
                        <img src="../images/artikel_image.png" alt="HiXpress Blog"/>
                    </div>
                    <div className={styles.blog_detail_meta}>
                        <div className={styles.blog_detail_meta_layout}>
                            <div className={styles.blog_detail_meta_box}>
                                <FaUser />
                                <span>Admin</span>
                            </div>
                            <div className={styles.blog_detail_meta_box}>
                                <FaStickyNote/>
                                <span>26 Agustus 2024</span>
                            </div>
                            <div className={styles.blog_detail_meta_box}>
                                <BsInboxesFill />
                                <span>Driver</span>
                            </div>
                        </div>
                        <h1>Menggali Lebih Dalam: Peran Penting Driver hiXpress dalam Kesuksesan Pengiriman</h1>
                    </div>
                    <div className={styles.blog_detail_content}>
                        <p>Di balik setiap paket yang tiba tepat waktu, ada seorang driver hiXpress yang bekerja tanpa henti untuk memastikan barang tersebut sampai di tangan penerima. Driver kami adalah tulang punggung layanan pengiriman, memainkan peran penting dalam menghadirkan pengalaman pengiriman yang cepat, aman, dan andal.</p>
                        <h3>Driver hiXpress: Lebih dari Sekadar Pengiriman</h3>
                        <p>Driver hiXpress bukan hanya sekadar orang yang mengantarkan paket dari titik A ke titik B. Mereka adalah profesional yang berdedikasi, dilatih untuk menangani setiap paket dengan perhatian dan kehati-hatian yang tinggi. Setiap driver memahami bahwa setiap pengiriman memiliki arti penting bagi pelanggan, baik itu barang kebutuhan sehari-hari, dokumen penting, atau hadiah spesial.</p>
                        <h3>Komitmen pada Ketepatan Waktu</h3>
                        <p>Salah satu nilai utama yang dipegang oleh para driver hiXpress adalah ketepatan waktu. Dalam dunia yang serba cepat ini, waktu adalah segalanya. Driver kami dilatih untuk memprioritaskan efisiensi tanpa mengorbankan kualitas layanan. Dengan pemahaman mendalam tentang rute terbaik dan kondisi lalu lintas, driver hiXpress mampu mengantarkan paket tepat waktu, setiap saat.</p>
                        <h3>Keamanan sebagai Prioritas Utama</h3>
                        <p>Keamanan pengiriman adalah prioritas utama bagi setiap driver hiXpress. Kami memahami bahwa kepercayaan pelanggan adalah hal yang sangat berharga, dan itulah sebabnya driver kami menjalani pelatihan ketat dalam penanganan paket. Mereka memastikan bahwa setiap barang yang diangkut aman dari kerusakan atau kehilangan selama proses pengiriman.</p>
                        <p>Dengan dedikasi dan kerja keras, driver hiXpress telah membuktikan bahwa mereka adalah bagian penting dari layanan kami. Kami berterima kasih atas semua yang mereka lakukan dan berkomitmen untuk terus mendukung mereka dalam setiap langkah perjalanan pengiriman.</p>
                    </div>
                </div>
            </div>
            <div className={styles.grid_container}>
                <div className={styles.divider_bottom}></div>
                <div className={styles.heading_artikel_grid}>
                    <h1>Artikel Lainnya</h1>
                </div>
                <div className={styles.grid_artikel_container}>
                    <div className={styles.grid_artikel}>
                        <div className={styles.box_artikel}>
                            <div className={styles.image_artikel}>
                                <img src="../images/artikel_image.png" alt="HiXpress"/>
                            </div>
                            <div className={`${styles.content_artikel} ${styles.content_artikel_grid}`}>
                                <span>Diposting 24/07/2024</span>
                                <h2>Lorem Ipsum Dolor</h2>
                                <p>Dengan layanan Sameday dan Instant Delivery, H! Express menjamin paket Anda tiba dengan cepat dan tepat waktu.</p>
                                <Link href="#"><button>Baca Selengkapnya</button></Link>
                            </div>
                        </div>
                        <div className={styles.box_artikel}>
                            <div className={styles.image_artikel}>
                                <img src="../images/artikel_image.png" alt="HiXpress"/>
                            </div>
                            <div className={`${styles.content_artikel} ${styles.content_artikel_grid}`}>
                                <span>Diposting 24/07/2024</span>
                                <h2>Lorem Ipsum Dolor</h2>
                                <p>Dengan layanan Sameday dan Instant Delivery, H! Express menjamin paket Anda tiba dengan cepat dan tepat waktu.</p>
                                <Link href="/artikel/1"><button>Baca Selengkapnya</button></Link>
                            </div>
                        </div>
                        <div className={styles.box_artikel}>
                            <div className={styles.image_artikel}>
                                <img src="../images/artikel_image.png" alt="HiXpress"/>
                            </div>
                            <div className={`${styles.content_artikel} ${styles.content_artikel_grid}`}>
                                <span>Diposting 24/07/2024</span>
                                <h2>Lorem Ipsum Dolor</h2>
                                <p>Dengan layanan Sameday dan Instant Delivery, H! Express menjamin paket Anda tiba dengan cepat dan tepat waktu.</p>
                                <Link href="#"><button>Baca Selengkapnya</button></Link>
                            </div>
                        </div>
                        <div className={styles.box_artikel}>
                            <div className={styles.image_artikel}>
                                <img src="../images/artikel_image.png" alt="HiXpress"/>
                            </div>
                            <div className={`${styles.content_artikel} ${styles.content_artikel_grid}`}>
                                <span>Diposting 24/07/2024</span>
                                <h2>Lorem Ipsum Dolor</h2>
                                <p>Dengan layanan Sameday dan Instant Delivery, H! Express menjamin paket Anda tiba dengan cepat dan tepat waktu.</p>
                                <Link href="#"><button>Baca Selengkapnya</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}