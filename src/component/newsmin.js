import { useEffect, useState } from "react";
import './newsmin.css';

const NewsMini = () => {
    const [news, setNews] = useState(null);
    const [page, setPage] = useState(1);
    const loadNews = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?language=en&q=premier&pageSize=30&page=${page}&category=sports&apiKey=3471d73852134f03aaf6c47b92866e08`);
        const data = await response.json();
        setNews(data.articles.slice(1, 6));
    }

    useEffect(() => {
        loadNews();
    }, [page]);
    return (
        <div className="newsfeed">
            <div className="header">
                <div className="header-text">Featured News</div>
                <div className='icon'>
                    <span class="material-symbols-outlined">
                        chevron_right
                    </span>
                </div>

            </div>
            <div className="body">

                {news && news.map(data => <News data={data} />)}

            </div>
        </div>

    )
}

export default NewsMini;

const News = ({ data }) => {
    return (
        <a className="news-min" href={data.url} target="_blank">
            <img src={data.urlToImage} className='img-back'>

            </img>
            <div className="title">{data.title}</div>

        </a>
    )
}