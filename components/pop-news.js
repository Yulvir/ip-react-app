import React from 'react'
import {useSelector} from "react-redux";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import SimpleCard from "./card/card-news";
import Divider from "@material-ui/core/Divider";

export default () => {
    const news = useSelector(state => state.news);

    const displayNews = (news) => {
        return (
            news.map((website, index) => (

          <div key={index}>
              <SimpleCard url={website.url} metaUrls={website.meta_urls} />
             <Divider />
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
