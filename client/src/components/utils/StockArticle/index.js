import React from "react";

function StockArticle(props) {
  return (
    <li className="list-group-item">
        <a href={props.url}>{props.text}</a>
    </li>
    );
}

export default StockArticle;