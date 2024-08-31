import styles from '@/styles/Lacak.module.css'
import banner from '@/styles/Banner.module.css'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { FaPaperPlane } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

export default function LacakPaket() {
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
            <title>HiX | Lacak Paket</title>
            <meta name="description" content="Solusi Pengiriman yang cepat & Tepat" /> 
        </Head>
        <div className={styles.bg_page}>
          <div className={banner.banner}>
            <img src='images/banner_lacak.png' alt='Lacak Paket HiXpress' />
          </div>
          <div className={banner.breadcumbs}>
                <p><Link href='/'>Beranda</Link> / <span>Lacak Paket</span></p>
            </div>
          <div className={styles.section1}>
            <img src='images/lacak_icon_1.png' className={styles.lacak_icon_1} />
            <img src='images/lacak_icon_2.png' className={styles.lacak_icon_2} />
            <img src='images/icon_lacak_mobile_2.png' className={styles.lacak_icon_mobile_2} />
            <div className={styles.section1_box}>
              <h1>Pelacakan Paket</h1>
              <p>Silakan masukkan nomor resi Anda pada formulir berikut</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.search_box}>
                  <input type='text' value={noResi} onChange={(e) => setNoResi(e.target.value)} />
                  <CiSearch />
                </div>
                <button type="button" onClick={togglePopup} disabled={isLoading}>
                    {isLoading ? 'Memuat...' : 'Lacak Sekarang'}
                </button>
              </form>
            </div>
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
      </>
    );
  }