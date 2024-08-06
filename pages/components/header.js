import styles from "@/styles/Header.module.css"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { useRouter } from "next/router";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
    const router = useRouter();
    const [menuActive, setMenuActive] = useState(false);

    const isActive = (path) => {
        return router.asPath === path ? styles.active : '';
    };

    const handleHamburger = () => {
        setMenuActive(!menuActive);
    }

    return(
        <>
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src="/images/logo.png" alt="Logo HiXpress"/> 
            </div>
            <button className={styles.hamburger} onClick={handleHamburger}>
                <IoIosMenu/>
            </button>
            <div className={`${styles.header_layout} ${menuActive ? styles.active : ''}`}>
                <button className={styles.close_button} onClick={handleHamburger}><IoCloseOutline/></button>
                <div className={styles.header_layout_top}>
                    <div className={styles.decoration}></div>
                    <div className={styles.header_content}>
                        <div className={styles.sosmed_layout}>
                            <Link href="#">
                                <div className={styles.sosmed_box}>
                                    <FaInstagram/>
                                </div>
                            </Link>
                            <Link href="#">
                                <div className={styles.sosmed_box}>
                                    <FaFacebook />
                                </div>
                            </Link>
                            <Link href="#">
                                <div className={styles.sosmed_box}>
                                    <FaTiktok/>
                                </div>
                            </Link>
                            <Link href="#">
                                <div className={styles.sosmed_box}>
                                    <FaWhatsapp/>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.search_header}>
                            <input type="text" placeholder="Cari..."/>
                            <LuSearch/>
                        </div>
                    </div>
                    <div className={styles.header_content}>
                        <div className={styles.header_contact}>
                            <MdPhone/>
                            <span>(+62) 878 6629 1056</span>
                        </div>
                        <div className={styles.header_contact}>
                            <MdEmail/>
                            <span>hixpress@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className={styles.header_layout_bottom}>
                   <ul>
                       <li className={isActive('/')}><Link href="/">Beranda</Link></li>
                       <li className={isActive('/lacak-paket')}><Link href="/lacak-paket">Lacak Paket</Link></li>
                       <li className={isActive('/tentang-kami')}><Link href="/tentang-kami">Tentang Kami</Link></li>
                       <li className={isActive('/layanan')}><Link href="/layanan">Layanan</Link></li>
                       <li className={isActive('/artikel')}><Link href="/artikel">Artikel</Link></li>
                       <li className={isActive('/kontak')}><Link href="/kontak">Kontak</Link></li>
                   </ul>
                </div>
            </div>
        </div>
        </>
    )
}