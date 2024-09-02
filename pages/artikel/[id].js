import Head from "next/head"
import banner from '@/styles/Banner.module.css'
import Link from "next/link"
import styles from "@/styles/Blog.module.css"
import { FaStickyNote } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BsInboxesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import Skeleton from "react-loading-skeleton";

export default function ArtikelDetail(){
    const router = useRouter();
    const { id } = router.query;
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/api/article-detail/${id}`);
                const data = await response.json();
                if (data && data.data) {
                    setArticle(data.data);
                } else {
                    console.error('Invalid response data format:', data);
                }
            } catch (error) {
                console.error('Error fetching article:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchArticle();
    }, [id]);
    
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('/api/recommend-article/');
                const allArticles = response.data.data;
    
                setArticles(allArticles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setIsLoading(false);
            }
        };
    
        if (id) { // Ensure id is defined before fetching articles
            fetchArticles();
        }
    }, [id]);
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching article: {error}</div>;
    }

    if (!article) {
        return <div>No article found.</div>;
    }

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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('id-ID', options);
        return formattedDate.replace(/\b(\w)/g, char => char.toUpperCase());
    };

    const modifyImageURLs = (html) => {
        const imgRegex = /<img\s+([^>]*src=['"]([^'"]+)['"][^>]*)>/gi;
        return html.replace(imgRegex, (match, p1, p2) => {
            const newSrc = `https://prahwa.net/storage/${p2}`;
            return match.replace(p2, newSrc);
        });
    };

    const modifiedContent = modifyImageURLs((article.text));

    return(
        <>
            <Head>
                <title>HiX | {stripH1Tags(article.title)}</title>
                <meta name="description" content="Solusi Pengiriman yang cepat & Tepat" /> 
            </Head>
            <div className={banner.banner}>
                <img src='../images/artikel_banner.png' alt='Lacak Paket HiXpress'/>
            </div>
            <div className={banner.breadcumbs}>
                <p><Link href='/'>Beranda</Link> / <Link href='/'>Artikel</Link> / <span>{stripH1Tags(article.title)}</span></p>
            </div>
            <div className={styles.blog_detail_container}>
                <div className={styles.divider_bottom}></div>
                <div className={styles.blog_detail_container_layout}>
                    <div className={styles.blog_detail_image}>
                        <img src={`https://prahwa.net/storage/${article.image}`} alt={stripH1Tags(article.title)} />
                    </div>
                    <div className={styles.blog_detail_meta}>
                        <div className={styles.blog_detail_meta_layout}>
                            <div className={styles.blog_detail_meta_box}>
                                <FaUser />
                                <span>{stripH1Tags(article.penulis)}</span>
                            </div>
                            <div className={styles.blog_detail_meta_box}>
                                <FaStickyNote/>
                                <span>{formatDate(stripH1Tags(article.date))}</span>
                            </div>
                            <div className={styles.blog_detail_meta_box}>
                                <BsInboxesFill />
                                <span>{stripH1Tags(article.category.name)}</span>
                            </div>
                        </div>
                        <h1>{stripH1Tags(article.title)}</h1>
                    </div>
                    <div className={styles.blog_detail_content}>
                        <div dangerouslySetInnerHTML={{ __html: modifiedContent }}></div>
                    </div>
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
                        articles.map(article => {
                            return (
                                <div className={styles.box_artikel} key={article.id}>
                                    <div className={styles.image_artikel}>
                                        <img src={`https://prahwa.net/storage/${article.image}`} alt={article.title} />
                                    </div>
                                    <div className={`${styles.content_artikel} ${styles.content_artikel_grid}`}>
                                        {article.date && <span>Diposting {formatDate(article.date)}</span>}
                                        <h2>{stripH1Tags(article.title)}</h2>
                                        <p>{stripH1Tags(article.text)}</p>
                                        <Link href={`/artikel/${article.id}`}>
                                            <button>Baca Selengkapnya</button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}