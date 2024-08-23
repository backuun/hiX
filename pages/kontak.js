import banner from '@/styles/Banner.module.css'
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/Contact.module.css'
import { LuPhoneCall } from "react-icons/lu";
import { RxEnvelopeClosed } from "react-icons/rx";

export default function Contact(){
    return(
        <>
            <Head>
                <title>HiX | Kontak</title>
                <meta name="description" content="Learn more about us" /> 
            </Head>
            <div className={banner.banner}>
                <img src='images/contact_page.png' alt='Lacak Paket HiXpress'/>
            </div>
            <div className={banner.breadcumbs}>
                <p><Link href='/'>Beranda</Link> / <span>Kontak</span></p>
            </div>
            <div className={styles.section1}>
                <div className={styles.divider_bottom}></div>
                <div className={styles.section1_layout}>
                <div className={styles.section1_form}>
                    <h1>Kontak Kami</h1>
                    <form>
                        <div className={styles.form_field_double}>
                            <div className={styles.form_field}>
                                <label>Nama</label>
                                <input type="text" placeholder="Nama" required />
                            </div>
                            <div className={styles.form_field}>
                            <label>Nomor Telepon</label>
                            <input type="number" placeholder="Nomor Telepon" required />
                            </div>
                        </div>
                        <div className={styles.form_field}>
                            <label>Email</label>
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className={styles.form_field}>
                            <label>Pertanyaan</label>
                            <textarea placeholder="Pertanyaan" required></textarea>
                        </div>
                        <label className={styles.customCheckbox}>
                            <input
                            type="checkbox"
                            className={styles.hiddenCheckbox}
                            />
                            <span className={styles.customCheckmark}></span>
                            Saya setuju dengan Kebijakan Privasi
                        </label>
                        <button>
                            Kirim Pesan
                        </button>
                    </form>
                </div>
                <div className={styles.addressDetail}>
                    <h3>PT. HI EXPRESS INDONESIA</h3>
                    <p>Perum Alexandria Blok Palermo No.1 Cipicung Cihideung Tasikmalaya</p>
                </div>
                <div className={styles.contact_detail}>
                    <h3>Kontak</h3>
                    <div className={styles.contact_layout}>
                    <div className={styles.contact_box}>
                        <LuPhoneCall/>
                        <h5>(+6221) 5745854</h5>
                    </div>
                    <div className={styles.contact_box}>
                        <RxEnvelopeClosed/>
                        <h5>hix@gmail.com</h5>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.maps}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.378564532631!2d106.814869375868!3d-6.213702560864358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f40184a6f121%3A0x46d7568ff13f0ab9!2sPT%20HOUSE%20AND%20VOX%20INDONESIA!5e0!3m2!1sen!2sid!4v1719396203076!5m2!1sen!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}