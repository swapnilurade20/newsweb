import React,{useState,useEffect} from "react";
import SingleHighlight from "./SingleHighlight";
import axios from "axios";

function Highlights()
{
    const [post,setPost]=useState([]);

    useEffect(() =>
    {
        axios
            .get(
                "https://newsapi.org/v2/everything?q=apple&from=2021-10-22&sortBy=popularity&apiKey=c9cd310262284963ae7c8166c22111b5"
            )
            .then((res) =>
            {
                // console.log(res);
                let articles=res.data.articles;
                setPost(articles);
            })
            .catch((err) => console.log(err));
    },[]);

    return (
        <>
            <h2 className="d-flex justify-content-center py-1">Today's Top Highlights</h2>
            <SingleHighlight articles={post} />
        </>
    );
}

export default Highlights;