import React from "react";
import "../App.css";

function SingleHighlight({articles})
{
    console.log(articles);

    return (
        <div className="newsWrapper">
            {articles.map((post,key) => (
                <div className="newsBox" key={key}>
                    <a href={post.url}>
                        <img src={post.urlToImage} className="newsThumbnail" />
                    </a>
                    <a href={post.url}>{post.title}</a>
                </div>
            ))}
        </div>
    );
}

export default SingleHighlight;