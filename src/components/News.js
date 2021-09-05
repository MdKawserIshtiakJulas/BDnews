import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import noImage from './No_Image_Found.jpg'
import LoadingSpinner from './LoadingSpinner'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    const [loading, setLoading] = useState(true);

    const updateNews = async (url) => {

        try {

            props.setProgress(30);
            let data = await fetch(url);

            props.setProgress(60);
            data = await data.json();

            props.setProgress(90);
            setArticles(data.articles);
            settotalResults(data.totalResults);
            setPage(page);
            setLoading(false);

            props.setProgress(100);

        }

        catch (e) {
            document.write("Your api key is expired.");
        }

    }

    useEffect(() => {

        document.title = `${props.catagory} | BDnews`;

        updateNews(`https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory.toLowerCase()}&apiKey=${props.apiKey}&page=${page}&pageSize=10`);
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {

        try {

            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory.toLowerCase()}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=10`);
            data = await data.json();

            setPage(page + 1);
            setArticles(articles.concat(data.articles));
            settotalResults(data.totalResults);
            setLoading(false);

        }

        catch (e) {
            document.write("Your api key is expired.");
        }

    }

    return (

        <div className="container my-3">

            <h1 className="text-center my-4">Top {props.catagory} news</h1>

            <hr />

            {loading && <LoadingSpinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<LoadingSpinner />}
            >

                {articles.map((element) => {
                    return <NewsItem key={element.url} title={element.title} description={element.description ? element.description : "Description is not available. Click the title to see full news."} url={element.url} urlToImage={element.urlToImage ? element.urlToImage : noImage} publishedAt={element.publishedAt} />
                })}

            </InfiniteScroll>

        </div>

    )
}

News.defaultProps = { catagory: 'General' };

export default News