import styles from "@/styles/Header.module.css"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { useRouter } from "next/router";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline, IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import Head from "next/head";

export default function Header() {
    const router = useRouter();
    const [menuActive, setMenuActive] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const isActive = (path) => {
        return router.asPath === path ? styles.active : '';
    };

    const handleHamburger = () => {
        setMenuActive(!menuActive);
    }

    const getLinkClass = (href) => {
        return router.pathname === href ? `${styles.link} ${styles.active}` : styles.link;
    };

    const isActiveMenu = (subMenuLinks) => {
        return subMenuLinks.some(link => router.pathname.startsWith(link));
    };

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
    };

    const clickMenu = () => {
        closeDropdown();
    };

    const clickMenuDropdown = () => {
        closeDropdown();
        handleHamburger();
    };

    return(
        <>
        <div className={styles.navLayout}>
            <div className={styles.nav}> 
                <div className={styles.logo}>
                    <img src="/images/logo_main.png" alt="Logo HiXpress"/> 
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
                            <li className={isActive('/')} onClick={clickMenuDropdown}>
                                <Link href="/">Beranda</Link>
                            </li>
                            <li className={isActive('/lacak-paket')} onClick={clickMenuDropdown}>
                                <Link href="/lacak-paket">Lacak Paket</Link>
                            </li>
                            <li className={isActive('/tentang-kami')} onClick={clickMenuDropdown}>
                                <Link href="/tentang-kami">Tentang Kami</Link>
                            </li>
                            <li>
                                <span
                                    className={`${openDropdown === 'layanan' || isActiveMenu(['/layanan/instant', '/layanan/sameday']) ? styles.activeSpan : ''}`}
                                    onClick={() => toggleDropdown('layanan')}
                                >
                                    Layanan <IoChevronDown />
                                </span>
                                <ul className={`${openDropdown === 'layanan' ? styles.show : ''}`}>
                                    <li onClick={clickMenuDropdown}>
                                        <Link href="/layanan/instant" legacyBehavior>
                                            <a className={getLinkClass('/layanan/instant')} onClick={clickMenu}>
                                                Instant
                                            </a>
                                        </Link>
                                    </li>
                                    <li onClick={clickMenuDropdown}>
                                        <Link href="/layanan/sameday" legacyBehavior>
                                            <a className={getLinkClass('/layanan/sameday')} onClick={clickMenu}>
                                                Sameday
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={isActive('/artikel')} onClick={clickMenuDropdown}>
                                <Link href="/artikel">Artikel</Link>
                            </li>
                            <li className={isActive('/kontak')} onClick={clickMenuDropdown}>
                                <Link href="/kontak">Kontak</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}