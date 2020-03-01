import React from 'react'
import {useSelector} from "react-redux";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import SimpleCard from "./card-news";

export default () => {
    const news = useSelector(state => state.news);


    const displayDescription = (meta_urls) =>{
        console.log(meta_urls);
        return (meta_urls.map((meta, index) => (
            <p>{meta.description}</p>
            ))
        );
    };
    const displayNews = (news) => {
        return (
            news.map((website, index) => (

          <div key={index}>
              <SimpleCard url={website.url} metaUrls={website.meta_urls} />

          </div>

        ))
        )
    };
    // https://www.npmjs.com/package/react-circular-progressbar
    return (
        <div style={{marginTop: "5%"}}>
        {
            news && (

                displayNews(news)

        )

}
</div>
)
}
