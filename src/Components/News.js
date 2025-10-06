import React, { useState, useEffect, useRef } from 'react';
import Newsitem from './Newsitem';
import Spinnero from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {
  const pageSize = 7;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loadingRef = useRef(false);
  const [totalresults, settotalResults] = useState(0);
  const fetching = () => {
    // Use serverless proxy at /api/news to avoid exposing API key and CORS issues
    console.log('🔍 Fetching news via proxy /api/news');

    props.setProgress(10);
    props.setProgressshowing(true);
    setLoading(true);
    const xhr = new XMLHttpRequest();
    let url = `/api/news?country=us&category=${props.category}&pageSize=${pageSize}&page=1`;
    xhr.open("GET", url, true);
    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        let percent = (event.loaded / event.total) * 100;
        props.setProgressshowing(true);
        props.setProgress(percent);
      }
    };
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log('✅ News data received:', data.articles?.length, 'articles');
        setArticles(data.articles);
        settotalResults(data.totalResults);
        setLoading(false);
        props.setProgressshowing(false);
        props.setProgress(100);
      } else {
        console.error('❌ API Error:', xhr.status, xhr.responseText);
        setLoading(false);
        props.setProgressshowing(false);
      }
    };
    xhr.onerror = () => {
      console.error('❌ Network Error occurred');
      props.setProgress(0);
      setLoading(false);
      props.setProgressshowing(false);
    };
    xhr.send();
  };
  useEffect(() => {
  console.log('📰 Loading more news via proxy...');
    
  setLoading(true);
  const xhr = new XMLHttpRequest();
  let url = `/api/news?country=us&category=${props.category}&pageSize=${pageSize}&page=${page}`;
  xhr.open("GET", url, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        settotalResults((prevtotalresults) => prevtotalresults - pageSize);
        setArticles((prev) => [...prev, ...data.articles]);
        props.setProgress(100);
        setLoading(false);
        props.setProgress(100);
        loadingRef.current = false;
      } else {
        setLoading(false);
      }
    };
    xhr.onerror = () => {
      loadingRef.current = false;
      setLoading(false);
    };
    xhr.send();
  }, [page]);
  const infintescroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 5
    ) {
      setPage(prev => prev + 1);
      console.log(page);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetching();
    window.addEventListener("scroll", infintescroll);
    return () => {
      window.removeEventListener("scroll", infintescroll);
    };
  }, [props.category]);

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ marginTop: '90px' }}>
        Top HeadLine About {props.Headline}
      </h1>
      <div className="row">
        {articles &&
          articles.map((element, index) => {
            return (
              <div className="col-md-4" key={`${element.url}-${index}`}>
                <Newsitem
                  title={`${!element.title ? 'title' : element.title.slice(0, 55)} ...`}
                  description={`${!element.description ? 'description' : element.description.slice(0, 55)}...`}
                  imageurl={
                    !element.urlToImage
                      ? 'https://i12.haber7.net//haber/haber7/og_image/2025/23/tesla_model_y_turkiyede_almanyadan_daha_ucuza_satiliyor_1748844439_3565.jpg'
                      : element.urlToImage
                  }
                  newsurl={element.url}
                  updateTime={element.publishedAt}
                  Author={element.author}
                  source={element.source.name}
                />
              </div>
            );
          })}
        {loading && <Spinnero />}
      </div>
    </div>
  );
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};
export default News;
