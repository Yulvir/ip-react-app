import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => {
  return { articles: state.articles };
};


const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(el => (
      <li>{el.ip}</li>
    ))}
  </ul>
);
const SearchedIp = connect(mapStateToProps)(ConnectedList);
export default SearchedIp;
