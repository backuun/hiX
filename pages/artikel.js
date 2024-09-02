import banner from '@/styles/Banner.module.css'
import Link from 'next/link'
import styles from '@/styles/Blog.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronDown } from "react-icons/fi";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'; // Import Skeleton
import 'react-loading-skeleton/dist/skeleton.css'; // Import Skeleton CSS

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
  };

export default function Blog(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Semua');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);

        useEffect(() => {
            const fetchCategories = async () => {
                try {
                    const response = await axios.get('/api/article-categories'); // Replace with your API endpoint
                    const data = response.data.data;
                    const formattedMenuItems = data.map(category => ({
                        label: category.name,
                        id: category.id
                    }));
                    setMenuItems(formattedMenuItems);
                    setSelectedCategoryId(formattedMenuItems[0]?.id || null); // Set default category ID
                } catch (error) {
                    console.error('Error fetching categories:', error);
                }
            };

            fetchCategories();
        }, []);

        useEffect(() => {
            if (selectedCategoryId) {
                const fetchRecipes = async () => {
                    try {
                        const response = await axios.get(`/api/articleByCategories/${selectedCategoryId}`);
                        setItems(response.data.data);
                    } catch (error) {
                        console.error('Error fetching recipes:', error);
                    } finally {
                        setIsLoading(false);
                    }
                };              
        
            fetchRecipes();
            }
        }, [selectedCategoryId]);

        useEffect(() => {
            const fetchArticles = async () => {
                try {
                    const response = await axios.get(`/api/recommend-article/`);
                    const articles = response.data.data;
    
                    // Filter out articles with category_id matching selectedCategoryId
                    const filteredArticles = articles.filter(article => article.category_id !== selectedCategoryId);
    
                    // Assuming the date field is in 'YYYY-MM-DD' format; adjust if necessary
                    const sortedArticles = filteredArticles
                        .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
                        .slice(0, 4); // Select the top 4 most recent articles
    
                    setArticles(sortedArticles);
                    console.log('Fetched and filtered articles:', sortedArticles);
                } catch (error) {
                    console.error('Error fetching articles:', error);
                } finally {
                    setIsLoading(false);
                }
            };
    
            fetchArticles();
        }, [selectedCategoryId]);

    const toggleDropdown = () => { 
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (menu) => {
        setSelectedOption(menu.label);
        setSelectedCategoryId(menu.id);
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    function stripH1Tags(str) {
        return str
          .replace(/<\/?(div|h1|h2|h3|h4|h5|h6|p|span|strong|em|a|ul|ol|li|br|hr|b|i|header|footer|nav|section|article|aside|main|table|tr|td|th|caption|form|input|button|select|option|textarea|label|fieldset|legend|datalist|output|iframe|embed|object|param|canvas|svg|video|audio|source|track|figcaption|figure|time|mark|meter|progress|details|summary|dialog|address|small|sub|sup|code|pre|s|del|u|ins|bdi|bdo|ruby|rt|rp|wbr|blockquote|cite|dfn|kbd|samp|var|abbr|address|p|section|article|header|footer|aside|nav|main|figure|figcaption|legend|datalist|output|progress|meter|details|summary|dialog|template|script|style|noscript|title)[^>]*>/gi, '') // Remove HTML tags
          .replace(/&nbsp;/g, '') // Remove non-breaking spaces
          .replace(/&ldquo;/g, '"') // Replace HTML entities for left double quotation mark
          .replace(/&rdquo;/g, '"') // Replace HTML entities for right double quotation mark
          .replace(/&lsquo;/g, "'") // Replace HTML entities for left single quotation mark
          .replace(/&rsquo;/g, "'") // Replace HTML entities for right single quotation mark
          .replace(/<div\s+class="meta"[^>]*>(.*?)<\/div>/gi, '') // Remove <div class="meta">
          .trim(); // Remove leading/trailing whitespace
      }

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
                            <div className={`${styles.dropdown_menu} ${isDropdownOpen ? 'show' : ''}`}>
                                {menuItems.map((menu) => (
                                    <div
                                        key={menu.id}
                                        className={`${styles.dropdown_item} ${selectedOption === menu.label ? styles.active : ''}`}
                                        onClick={() => handleOptionClick(menu)}
                                    >
                                        {menu.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.artikel_slide}>
                    {isLoading ? (
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
                            {/* Skeleton loader */}
                            {[...Array(3)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.box_artikel}>
                                        <div className={styles.image_artikel}>
                                            <Skeleton className='skeleton-cover' width="100%" />
                                        </div>
                                        <div className={styles.content_artikel}>
                                            <Skeleton height={20} width="60%" style={{ marginBottom: 10 }} />
                                            <Skeleton count={2} height={15} width="80%" />
                                            <Skeleton height={30} width="40%" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        items.length > 0 && (
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
                                {items.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className={styles.box_artikel}>
                                            <div className={styles.image_artikel}>
                                                <img src={`https://prahwa.net/storage/${item.image}`} alt={item.title} />
                                            </div>
                                            <div className={styles.content_artikel}>
                                                {item.date && <span>Diposting {formatDate(item.date)}</span>}
                                                <h2>{stripH1Tags(item.title)}</h2>
                                                <p>{stripH1Tags(item.text)}</p>
                                                <Link href={`/artikel/${item.id}`}><button>Baca Selengkapnya</button></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )
                    )}
                </div>
            </div>
            <div className={styles.grid_container}>
                <div className={styles.divider_bottom}></div>
                <div className={styles.heading_artikel_grid}>
                    <h1>Artikel Lainnya</h1>
                </div>
                <div className={styles.grid_artikel_container}>
                    <div className={styles.grid_artikel}>
                        {isLoading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <div className={styles.box_artikel} key={index}>
                                <div className={styles.image_artikel}>
                                    <Skeleton height={150} width="100%" />
                                </div>
                                <div className={`${styles.content_artikel} ${styles.content_artikel_grid}`}>
                                    <Skeleton height={20} width="70%" />
                                    <Skeleton height={15} width="50%" />
                                    <Skeleton count={3} height={10} />
                                    <Skeleton height={30} width="30%" />
                                </div>
                                </div>
                            ))
                        ) : (
                            articles.map((article) => (
                                <div className={styles.box_artikel} key={article.id}>
                                    <div className={styles.image_artikel}>
                                        <img src={`https://prahwa.net/storage/${article.image}`} alt={article.title} />
                                    </div>
                                    <div className={`${styles.content_artikel} ${styles.content_artikel_grid}`}>
                                        {article.date && <span>Diposting {formatDate(article.date)}</span>}
                                        <h2>{stripH1Tags(article.title)}</h2>
                                        <p>{stripH1Tags(article.text)}</p>
                                        <Link href={`/artikel/${article.id}`}><button>Baca Selengkapnya</button></Link>
                                    </div>
                                </div>
                            )))}
                    </div>
                </div>
            </div>
        </>
    )
}