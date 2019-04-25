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
        console.log("Did mount!");
        axios.get("/api/news/").then((response) => {
            console.log(response.data)
            this.setState({news: response.data})
        }) 
      }
    
    render() {
        return (
            <div className="rightSideNav1">
                {this.state.news.map(news => (
                    <div>
                        <a href={news.link} target="_blank"><h6>{news.title}</h6> </a>
                        {/* <h6>{news.link}</h6> */}
                        <h6>{news.pubDate}</h6>
                    </div>
                ))}
            </div>
        )
    }
}

export default Article;