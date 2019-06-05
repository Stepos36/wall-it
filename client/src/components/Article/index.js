import React, { Component } from "react";
import "./style.css";
import axios from "axios"


class Article extends Component {
    constructor() {
        super();

        this.state = {
        news: []
      };
    };

    componentDidMount() {
        axios.get("/api/news/").then((response) => {
            this.setState({news: response.data})
        }) 
      }
    
    render() {
        return (
            <div className="rightSideNav1 shadow-left">
                {this.state.news.map(news => (
                    <div className='newsContainer'>
                        <h7 className="articleDate">{news.pubDate.substring(0,26)}</h7>
                        <a href={news.link} target="_blank"><h6 className="newsTitle">{news.title}</h6> </a>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}

export default Article;