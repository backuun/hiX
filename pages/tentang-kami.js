import banner from '@/styles/Banner.module.css'
import Link from 'next/link'
import styles from '@/styles/About.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function About(){
    return(
        <>
            <Head>
                <title>HiX | Tentang Kami</title>
                <meta name="description" content="Solusi Pengiriman yang cepat & Tepat" /> 
            </Head>
            <div className={banner.banner}>
                <img src='images/banner_tentang_kami.png' alt='Lacak Paket HiXpress'/>
            </div>
            <div className={banner.breadcumbs}>
                <p><Link href='/'>Beranda</Link> / <span>Tentang Kami</span></p>
            </div>
            <div className={styles.section_2}>
                <div className={styles.section_2_image}>
                    <img src='images/about_image.png' alt='HiXpress'/>
                </div>
                <div className={styles.section_2_text}>
                    <h1>PT. HI EXPRESS INDONESIA</h1>
                    <h4>Sebuah perusahaan pengiriman Barang Logistik</h4>
                    <p>H! Express didirikan dengan visi untuk memberikan solusi pengiriman yang cepat, aman, dan andal bagi pelanggan di seluruh Indonesia. Berawal dari kebutuhan akan layanan ekspedisi yang dapat diandalkan dalam dunia yang semakin bergerak cepat, kami mulai beroperasi dengan fokus pada kecepatan dan kualitas.</p>
                    <p>Sejak awal, H! Express berkomitmen untuk menyediakan layanan pengiriman yang memenuhi kebutuhan pelanggan, mulai dari pengiriman makanan dan minuman, obat-obatan dan produk kesehatan, hingga dokumen penting. Kami terus berkembang dengan menambahkan berbagai jenis layanan pengiriman, seperti Sameday dan Instant Delivery, untuk menjawab kebutuhan pasar yang semakin menuntut.</p>
                </div>
            </div>
            <div className={styles.section_3}>
                <div className={styles.section_3_heading}>
                    <h1>Visi & Misi HiXpress</h1>
                    <p>Kami mempunyai tujuan yang jelas untuk menjadi mitra pengiriman terpercaya bagi setiap pelanggan, dengan fokus pada kecepatan, keamanan, dan kepuasan.</p>
                </div>
            </div>
            <div className={styles.section_4}>
                <img src='images/about_icon_1.png' className={styles.about_icon_1}/>
                <img src='images/about_icon_2.png' className={styles.about_icon_2}/>
                <div className={styles.vision_mision}>
                   <div className={styles.vision_mision_box}>
                        <h3>Visi</h3>
                        <p>Menjadi penyedia layanan ekspedisi terdepan yang dikenal akan kecepatan, keamanan, dan keandalan di seluruh Indonesia.</p>
                   </div>
                   <div className={styles.vision_mision_box}>
                        <h3>Misi</h3>
                        <ul>
                            <li>Mengutamakan kecepatan dan ketepatan waktu dalam setiap pengiriman.</li>
                            <li>Menjamin keamanan dan keutuhan setiap paket yang dikirim.</li>
                            <li>Memberikan layanan pelanggan terbaik dengan solusi yang responsif dan profesional.</li>
                            <li>Terus berinovasi dengan teknologi canggih untuk meningkatkan kualitas layanan.</li>
                            <li>Membangun jaringan pengiriman yang luas dan efisien di seluruh wilayah Indonesia.</li>
                        </ul>
                   </div>
                </div>
                <div className={styles.section8}>
                    <span>Artikel</span>
                    <h1>Jelajahi Artikel Kami untuk Informasi Seru dan Bermanfaat!</h1>
                    <div className={styles.artikel_slide}>
                        <Swiper
                        cssMode={true}
                        navigation={true}
                        slidesPerView={1}
                        spaceBetween={16}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            },
                            768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            },
                            1024: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="swiperArtikel swiperArtikelAbout"
                        >
                        <SwiperSlide>
                            <div className={styles.box_artikel}>
                            <div className={styles.image_artikel}>
                                <img src="images/artikel_image.png" alt="HiXpress"/>
                            </div>
                            <div className={styles.content_artikel}>
                                <span>Diposting 24/07/2024</span>
                                <h2>Lorem Ipsum Dolor</h2>
                                <p>Dengan layanan Sameday dan Instant Delivery, H! Express menjamin paket Anda tiba dengan cepat dan tepat waktu.</p>
                                <Link href="#"><button>Baca Selengkapnya</button></Link>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box_artikel}>
                            <div className={styles.image_artikel}>
                                <img src="images/artikel_image.png" alt="HiXpress"/>
                            </div>
                            <div className={styles.content_artikel}>
                                <span>Diposting 24/07/2024</span>
                                <h2>Lorem Ipsum Dolor</h2>
                                <p>Dengan layanan Sameday dan Instant Delivery, H! Express menjamin paket Anda tiba dengan cepat dan tepat waktu.</p>
                                <Link href="#"><button>Baca Selengkapnya</button></Link>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box_artikel}>
                            <div className={styles.image_artikel}>
                                <img src="images/artikel_image.png" alt="HiXpress"/>
                            </div>
                            <div className={styles.content_artikel}>
                                <span>Diposting 24/07/2024</span>
                                <h2>Lorem Ipsum Dolor</h2>
                                <p>Dengan layanan Sameday dan Instant Delivery, H! Express menjamin paket Anda tiba dengan cepat dan tepat waktu.</p>
                                <Link href="#"><button>Baca Selengkapnya</button></Link>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box_artikel}>
                            <div className={styles.image_artikel}>
                                <img src="images/artikel_image.png" alt="HiXpress"/>
                            </div>
                            <div className={styles.content_artikel}>
                                <span>Diposting 24/07/2024</span>
                                <h2>Lorem Ipsum Dolor</h2>
                                <p>Dengan layanan Sameday dan Instant Delivery, H! Express menjamin paket Anda tiba dengan cepat dan tepat waktu.</p>
                                <Link href="#"><button>Baca Selengkapnya</button></Link>
                            </div>
                            </div>
                        </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}