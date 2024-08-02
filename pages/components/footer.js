import styles from "@/styles/Footer.module.css"
import Link from "next/link"
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer() {
    return(
        <>
        <div className={styles.footer}>
            <div className={styles.footer_header}>
                <div className={styles.footer_company}>
                    <img src="images/logo.png" alt="Kenali Diri Logo" />
                    <p>Nama domain 'www.hix.id' adalah milik PT. Prahwa Sakha, perusahaan ekspedisi yang menawarkan layanan pengiriman cepat dan handal.</p>
                    <div className={styles.social_media}>
                        <img src="images/qr_image.png" alt="HiXpress"/>
                        <img src="images/google_play_image.png" alt="HiXpress"/>
                        <img src="images/app_store_image.png" alt="HiXpress"/>
                    </div>
                </div>
                <div className={styles.footer_menu}>
                    <div className={styles.footer_contact}>
                        <h3>Partner</h3>
                        <p>Partnership</p>
                        <p>Berita</p>
                    </div>
                    <div className={styles.footer_contact}>
                        <h3>Company</h3>
                        <p>Tentang Kami</p>
                        <p>Kontak</p>
                        <p>Layanan</p>
                    </div>
                    <div className={styles.footer_contact}>
                        <h3>Help</h3>
                        <p>FAQ</p>
                        <p>Keluhan</p>
                        <p>Panduan</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_middle}>
                <ul>
                    <Link href="#"><li>Syarat Ketentuan</li></Link>
                    <Link href="#"><li>Kebijakan Privasi</li></Link>
                    <Link href="#"><li>Kebijakan Cookie</li></Link>
                </ul>
                <span>© 2024 Hi Express | All Rights Reserved</span>
            </div>
            <div className={styles.footer_disclaimer}>
                <p><b>Disclaimer:</b> Kami tidak bertanggung jawab atas konten situs pihak ketiga. Verifikasi informasi dan konsultasikan dengan profesional sebelum mengambil keputusan.</p>
            </div>
            <div className={styles.footer_end}>
                <div className={styles.footer_end_box}>
                    <FaLocationDot/>
                    <div className={styles.footer_end_box_content}>
                        <h4>Perum Alexandria Jl. Palermo No. 1</h4>
                        <p>Kel. Cipicung, Kec. Cihideung, Kota Tasikmalaya</p>
                    </div>
                </div>
                <div className={styles.footer_end_box}>
                    <MdEmail/>
                    <div className={styles.footer_end_box_content}>
                        <h4>Email</h4>
                        <p>cs@hixpress.id</p>
                    </div>
                </div>
                <div className={styles.footer_end_box}>
                    <FaPhoneAlt />
                    <div className={styles.footer_end_box_content}>
                        <h4>Telepon</h4>
                        <p>+62 895 6104 11991</p>
                    </div>
                </div>
            </div>
            <div className={styles.copyrightMobile}>
                <span>©️ 2024 Kenali Diri | ID</span>
            </div>
        </div>
        
        </>
    )
} 