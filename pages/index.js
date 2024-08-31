import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Slide from "./components/slide";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import React, { useRef, useState } from 'react';
import { FaPaperPlane } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
    const [noResi, setNoResi] = useState('');
    const [trackingData, setTrackingData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const togglePopup = async () => {
        if (!noResi) return;
    
        setIsLoading(true); // Set isLoading menjadi true saat permintaan API dimulai
        try {
          const response = await axios.get(`/api/lacak?noResi=${noResi}`);
          setTrackingData(response.data);
          setIsActive(true);
        } catch (error) {
          console.error('Error fetching tracking data:', error);
        } finally {
          setIsLoading(false); // Set isLoading menjadi false setelah permintaan API selesai
        }
      };

  return (
    <>
      <Head>
        <title>HiXpress</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slide/>
      <div className={styles.section2}>
        <div className={styles.divider}></div>
        <div className={styles.section2_image}>
          <img src="images/section2_image.png" alt="HiXpress"/>
        </div>
        <div className={styles.section2_text}>
          <span>Tentang H! Express</span>
          <h1>Solusi Pengiriman yang cepat & Tepat</h1>
          <p>H! Express adalah perusahaan ekspedisi yang menawarkan layanan pengiriman cepat dan handal untuk memenuhi kebutuhan pelanggan yang memerlukan pengiriman paket dengan segera.</p>
          <div className={styles.section2_layout}>
            <div className={styles.section2_box}>
              <img src="/images/instant.png" alt="HiXpress"/>
              <h5>Instant</h5>
            </div>
            <div className={styles.section2_box}>
              <img src="/images/sameday.png" alt="HiXpress"/>
              <h5>Sameday</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.section3_layout_1}>
          <h1>Jenis Paket</h1>
          <p>Dengan H! Express, Anda tidak hanya mendapatkan layanan pengiriman cepat, tetapi juga jaminan keutuhan dan keamanan barang Anda sampai ke tujuan.</p>
        </div>
        <div className={styles.section3_layout_2}>
          <div className={styles.section3_layout_box}>
            <div className={styles.section3_layout_image}>
              <img src="images/dokumen.png" alt="Hixpress"/>
            </div>
            <h1>Dokumen</h1>
            <p>Pengiriman dokumen penting
            dengan kecepatan tinggi dan keamanan, menjamin dokumen Anda tiba tepat waktu dan dalam kondisi sempurna.</p>
          </div>
          <div className={styles.section3_layout_box}>
            <div className={styles.section3_layout_image}>
              <img src="images/obat.png" alt="Hixpress"/>
            </div>
            <h1>Obat & Kesehatan</h1>
            <p>Pengiriman obat-obatan dan produk kesehatan lainnya dengan aman dan tepat waktu, memastikan kebutuhan kesehatan Anda terpenuhi segera.</p>
          </div>
          <div className={styles.section3_layout_box}>
            <div className={styles.section3_layout_image}>
              <img src="images/f&b.png" alt="Hixpress"/>
            </div>
            <h1>F&B</h1>
            <p>Pengiriman makanan dan minuman segar, bahan-bahan kuliner, serta produk F&B lainnya, dengan kecepatan dan kehati-hatian untuk menjaga kesegaran dan kualitas.</p>
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <div className={styles.section4_layout}>
          <h1>Jenis Transportasi</h1>
          <p>H! Express menawarkan berbagai jenis transportasi pengiriman untuk memastikan paket Anda tiba dengan cepat dan aman</p>
        </div>
        <div className={styles.section4_layout2}>
          <div className={styles.divider_bottom}></div>
          <div className={styles.section4_box}>
            <img src="images/motor.png" alt="Hixpress"/>
            <h2>Motor</h2>
            <Link href="#"><button>Lihat Selengkapnya</button></Link>
          </div>
          <div className={styles.section4_box}>
            <img src="images/pickup.png" alt="Hixpress"/>
            <h2>Pickup</h2>
            <Link href="#"><button>Lihat Selengkapnya</button></Link>
          </div>
          <div className={styles.section4_box}>
            <img src="images/mobil.png" alt="Hixpress"/>
            <h2>Mobil</h2>
            <Link href="#"><button>Lihat Selengkapnya</button></Link>
          </div>
        </div>
      </div>
      <div className={styles.section5}>
        <div className={styles.section5_content}>
          <span>Lacak Pengiriman</span>
          <h1>Lacak pengiriman paket anda dengan mudah</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.searchResi}>
              <input type='text' placeholder="Masukkan nomor resi" value={noResi} onChange={(e) => setNoResi(e.target.value)} />
              <CiSearch />
            </div>
          </form>
          <button type="button" onClick={togglePopup} disabled={isLoading}>
              {isLoading ? 'Memuat...' : 'Lacak Sekarang'}
          </button>
          <img src="images/box_icon.png" alt="HiXpress" className={styles.box_icon}/>
        </div>
        <div className={styles.section5_image}>
          <img src="images/lacak_image.png" alt="HiXpress"/>
        </div>
      </div>
      {isActive && trackingData && (
        <div className={`${styles.popup_lacak} ${styles.active}`}>
          <div className={styles.overlay} onClick={() => setIsActive(false)}></div>
          <div className={styles.popup_box}>
            <div className={styles.popup_menu}>
              <BsArrowLeft onClick={() => setIsActive(false)} />
              <h3>Lacak Pengiriman</h3>
            </div>
            <div className={styles.popup_heading}>
              <FaPaperPlane />
              <h3>{noResi}</h3>
            </div>
            <div className={styles.from_to}>
              <div className={styles.from_to_icon}>
                <FaInbox />
                <span>From</span>
              </div>
              <div className={styles.from_to_address}>
                <h3>{trackingData.pengirim.cabang}</h3>
              </div>
            </div>
            <div className={styles.from_to}>
              <div className={styles.from_to_icon}>
                <FaTruck />
                <span>To</span>
              </div>
              <div className={styles.from_to_address}>
                <h3>{trackingData.penerima.alamat}</h3>
              </div>
            </div>
            <div className={styles.shipping_status}>
              <div className={styles.popup_heading}>
                <FaHistory />
                <h3>Status Pengiriman</h3>
              </div>
              <div className={styles.shipping_status_process}>
                {trackingData.logs.map((log, index) => (
                  <div key={index} className={styles.shipping_status_box}>
                    <h5>{log.keterangan}</h5>
                    <span>{`${log.tanggal} - ${log.jam}`}</span>
                  </div>
                ))}
              </div>
              <div className={styles.user_shipping}>
                <FaUser />
                <div className={styles.user_shipping_data}>
                  <span>Nama Penerima</span>
                  <h1>{trackingData.penerima.nama}</h1>
                </div>
              </div>
            </div>
            <div className={styles.shipping_status}>
              <div className={styles.popup_heading}>
                <FaInbox />
                <h3>Shipment Detail</h3>
              </div>
              <div className={styles.user_shipping}>
                <div className={styles.user_shipping_data}>
                  <span>Deskripsi Barang</span>
                  <h3>{trackingData.pengirim.merchant}</h3>
                </div>
              </div>
            </div>
            <div className={styles.shipping_status}>
              <div className={styles.popup_heading}>
                <FaUser />
                <h3>Shipper Information</h3>
              </div>
              <div className={styles.flex_column_gap}>
                <div className={styles.user_shipping}>
                  <div className={styles.user_shipping_data}>
                    <span>Nama Pengirim</span>
                    <h3>{trackingData.pengirim.merchant}</h3>
                  </div>
                </div>
                <div className={styles.user_shipping}>
                  <div className={styles.user_shipping_data}>
                    <span>Kota Pengirim</span>
                    <h3>{trackingData.pengirim.alamat}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.shipping_status}>
              <div className={styles.popup_heading}>
                <FaUser />
                <h3>Informasi Penerima</h3>
              </div>
              <div className={styles.flex_column_gap}>
                <div className={styles.user_shipping}>
                  <div className={styles.user_shipping_data}>
                    <span>Nama Penerima</span>
                    <h3>{trackingData.penerima.nama}</h3>
                  </div>
                </div>
                <div className={styles.user_shipping}>
                  <div className={styles.user_shipping_data}>
                    <span>Kota Penerima</span>
                    <h3>{trackingData.penerima.alamat}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.section6}>
        <img src="images/img_left.png" alt="HiXpress" className={styles.img_left} />
        <img src="images/img_right.png" alt="HiXpress" className={styles.img_right} />
        <div className={styles.divider_bottom}></div>
        <h1>Keuntungan Memilih H! Express untuk Pengiriman Anda</h1>
        <div className={styles.section6_layout}>
          <div className={styles.section6_box}>
            <div className={styles.section6_image}>
              <img src="images/keuntungan-1.png" alt="HiXpress"/>
            </div>
            <h4>Pengiriman Cepat</h4>
            <p>Dengan layanan Sameday dan Instant Delivery, H! Express menjamin paket Anda tiba dengan cepat dan tepat waktu.</p>
          </div>
          <div className={styles.section6_box}>
            <div className={styles.section6_image}>
              <img src="images/keuntungan-2.png" alt="HiXpress"/>
            </div>
            <h4>Keamanan Barang</h4>
            <p>Setiap paket dikemas dengan baik dan diantar dengan hati-hati untuk menjaga keutuhan dan keamanan barang Anda.</p>
          </div>
          <div className={styles.section6_box}>
            <div className={styles.section6_image}>
              <img src="images/keuntungan-3.png" alt="HiXpress"/>
            </div>
            <h4>Layanan Pelacakan</h4>
            <p>Fasilitas pelacakan real-time untuk memantau status pengiriman paket Anda kapan saja dan di mana saja.</p>
          </div>
          <div className={styles.section6_box}>
            <div className={styles.section6_image}>
              <img src="images/keuntungan-4.png" alt="HiXpress"/>
            </div>
            <h4>Harga Kompetitif</h4>
            <p>H! Express menawarkan tarif pengiriman yang terjangkau tanpa mengorbankan kualitas layanan, memberikan nilai lebih untuk setiap pengiriman Anda.</p>
          </div>
        </div>
      </div>
      <div className={styles.section7}>
        <div className={styles.section7_heading}>
          <h1>Partner Kami</h1>
          <Link href="#">Jadilah Partner H! Express!</Link>
        </div>
        <div className={styles.partner_slide}>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
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
                slidesPerView: 4,
                spaceBetween: 45,
              },
            }}
            modules={[Pagination]}
            className="swiperPartner"
          >
            <SwiperSlide>
              <div className={styles.partner_box}>
                  <img src="images/logo_partner.png" alt="HiXpress"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.partner_box}>
                  <img src="images/logo_partner.png" alt="HiXpress"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.partner_box}>
                  <img src="images/logo_partner.png" alt="HiXpress"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.partner_box}>
                  <img src="images/logo_partner.png" alt="HiXpress"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.partner_box}>
                  <img src="images/logo_partner.png" alt="HiXpress"/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.section8}>
        <div className={styles.divider_bottom}></div>
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
            className="swiperArtikel"
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
    </>
  );
}
