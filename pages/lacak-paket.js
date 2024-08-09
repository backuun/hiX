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


export default function LacakPaket(){
    const [isActive, setIsActive] = useState(false);

    const togglePopup = () => {
        setIsActive(!isActive);
    };
    return(
        <>
        <div className={styles.bg_page}>
            <div className={banner.banner}>
                <img src='images/banner_lacak.png' alt='Lacak Paket HiXpress'/>
            </div>
            <div className={banner.breadcumbs}>
                <p><Link href='/'>Beranda</Link> / <span>Lacak Paket</span></p>
            </div>
            <div className={styles.section1}>
                <img src='images/lacak_icon_1.png' className={styles.lacak_icon_1}/>
                <img src='images/lacak_icon_2.png' className={styles.lacak_icon_2}/>
                <img src='images/icon_lacak_mobile_2.png' className={styles.lacak_icon_mobile_2}/>
                <div className={styles.section1_box}>
                    <h1>Pelacakan Paket</h1>
                    <p>Silakan masukkan nomor resi Anda pada formulir berikut</p>
                    <div className={styles.search_box}>
                        <input type='text'/>
                        <CiSearch/>
                    </div>
                    <button onClick={togglePopup}>Lacak Sekarang</button>
                </div>
            </div>
        </div>
        <div className={`${styles.popup_lacak} ${isActive ? styles.active : ''}`}>
            <div className={styles.overlay} onClick={togglePopup}></div>
            <div className={styles.popup_box}>
                <div className={styles.popup_menu}>
                    <BsArrowLeft onClick={togglePopup}/>
                    <h3>Lacak Pengiriman</h3>
                </div>
                <div className={styles.popup_heading}>
                    <FaPaperPlane/>
                    <h3>HIX20240801UN8LVCT27</h3>
                </div>
                <div className={styles.from_to}>
                    <div className={styles.from_to_icon}>
                        <FaInbox/>
                        <span>From</span>
                    </div>
                    <div className={styles.from_to_address}>
                        <h3>KEC. PURBARATU</h3>
                    </div>
                </div>
                <div className={styles.from_to}>
                    <div className={styles.from_to_icon}>
                        <FaTruck/>
                        <span>To</span>
                    </div>
                    <div className={styles.from_to_address}>
                        <h3>KEC. TUGUJAYA</h3>
                    </div>
                </div>
                <div className={styles.shipping_status}>
                    <div className={styles.popup_heading}>
                        <FaHistory/>
                        <h3>Status Pengiriman</h3>
                    </div>
                    <div className={styles.shipping_status_process}>
                        <div className={styles.shipping_status_box}>
                            <h5>PENJUAL TELAH MENGATUR PENGIRIMAN</h5>
                            <span>01-08-2024 - 21:27</span>
                        </div>
                        <div className={styles.shipping_status_box}>
                            <h5>PESANAN AKAN DIAMBIL OLEH DRIVER</h5>
                            <span>01-08-2024 - 21:45</span>
                        </div>
                        <div className={styles.shipping_status_box}>
                            <h5>PESANAN SEDANG DIAMBIL OLEH DRIVER</h5>
                            <span>02-08-2024 - 14:13</span>
                        </div>
                        <div className={styles.shipping_status_box}>
                            <h5>PESANAN TELAH BERHASIL DIAMBIL</h5>
                            <span>02-08-2024 - 14:19</span>
                        </div>
                        <div className={styles.shipping_status_box}>
                            <h5>PESANAN SEDANG DI ANTAR OLEH DRIVER</h5>
                            <span>02-08-2024 - 15:17</span>
                        </div>
                        <div className={styles.shipping_status_box}>
                            <h5>PESANAN TELAH SAMPAI</h5>
                            <span>02-08-2024 - 16:57</span>
                        </div>
                    </div>
                    <div className={styles.user_shipping}>
                        <FaUser/>
                        <div className={styles.user_shipping_data}>
                            <span>Nama Penerima</span>
                            <h1>Rafli</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.shipping_status}>
                    <div className={styles.popup_heading}>
                        <FaInbox/>
                        <h3>Shipment Detail</h3>
                    </div>
                    <div className={styles.user_shipping}>
                        <div className={styles.user_shipping_data}>
                            <span>Deskripsi Barang</span>
                            <h3>Energizer Facial Wash - Ms Glow for Men - Face Wash Pria Ms - 1kg</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.shipping_status}>
                    <div className={styles.popup_heading}>
                        <FaUser/>
                        <h3>Shipper Information</h3>
                    </div>
                    <div className={styles.flex_column_gap}>
                        <div className={styles.user_shipping}>
                            <div className={styles.user_shipping_data}>
                                <span>Nama Pengirim</span>
                                <h3>Bening`s Official Store</h3>
                            </div>
                        </div>
                        <div className={styles.user_shipping}>
                            <div className={styles.user_shipping_data}>
                                <span>Kota Pengirim</span>
                                <h3>Kota Bandung</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.shipping_status}>
                    <div className={styles.popup_heading}>
                        <FaUser/>
                        <h3>Informasi Penerima</h3>
                    </div>
                    <div className={styles.flex_column_gap}>
                        <div className={styles.user_shipping}>
                            <div className={styles.user_shipping_data}>
                                <span>Nama Penerima</span>
                                <h3>Rafli</h3>
                            </div>
                        </div>
                        <div className={styles.user_shipping}>
                            <div className={styles.user_shipping_data}>
                                <span>Kota Penerima</span>
                                <h3>Purbaratu, Tasikmalaya</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}