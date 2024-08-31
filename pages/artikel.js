import banner from '@/styles/Banner.module.css'
import Link from 'next/link'
import styles from '@/styles/Blog.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronDown } from "react-icons/fi";
import { useState } from 'react';
import Head from 'next/head';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function Blog(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Semua');

    const toggleDropdown = () => { 
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    return(
        <>
            <Head>
                <title>HiX | Artikel</title>
                <meta name="description" content="Solusi Pengiriman yang cepat & Tepat" /> 
            </Head>
            <div className={banner.banner}>
                <img src='images/artikel_banner.png' alt='Lacak Paket HiXpress'/>
            </div>
            <div className={banner.breadcumbs}>
                <p><Link href='/'>Beranda</Link> / <span>Artikel</span></p>
            </div>
            <div className={styles.container_artikel}>
                <div className={styles.divider_bottom}></div>
                <div className={styles.heading_artikel}>
                    <h1>Artikel Terbaru</h1>
                    <div className={`${styles.category_artikel} ${isDropdownOpen ? styles.active : ''}`}>
                        <div className={`${styles.category_button} ${isDropdownOpen ? styles.active : ''}`} onClick={toggleDropdown}>
                            {selectedOption} <FiChevronDown />
                        </div>
                        {isDropdownOpen && (
                            <div className={`${styles.dropdown_menu} ${styles.active}`}>
                                <div onClick={() => handleOptionClick('Semua')}>Semua</div>
                                <div onClick={() => handleOptionClick('Ecommerce')}>Ecommerce</div>
                                <div onClick={() => handleOptionClick('Driver')}>Driver</div>
                                <div onClick={() => handleOptionClick('Delivery')}>Delivery</div>
                                <div onClick={() => handleOptionClick('Personal')}>Personal</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.artikel_slide}>
                    <Swiper
                        cssMode={true}
                        slidesPerView={1}
                        spaceBetween={16}
                        loop={true}
                        navigation={true}
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
                        className="swiperArtikel swiperArtikelPage"
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
                            <Link href="artikel/1"><button>Baca Selengkapnya</button></Link>
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
                            <Link href="artikel/1"><button>Baca Selengkapnya</button></Link>
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
                            <Link href="artikel/1"><button>Baca Selengkapnya</button></Link>
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
                            <Link href="artikel/2"><button>Baca Selengkapnya</button></Link>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>
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
                                <img src="images/artikel_image.png" alt="HiXpress"/>
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
                                <img src="images/artikel_image.png" alt="HiXpress"/>
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
                                <img src="images/artikel_image.png" alt="HiXpress"/>
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
                                <img src="images/artikel_image.png" alt="HiXpress"/>
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