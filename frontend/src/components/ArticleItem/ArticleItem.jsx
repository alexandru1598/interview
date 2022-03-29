import React from "react";
import { Link } from "react-router-dom";
import "./ArticleItem.css";

function ArticleItem(props) {
    return (
        <div className="article-item">
            <Link className="title" to={`/post/${props.id}`}>
                Title: {props.title}
            </Link>
            <div className="content">Content: {props.content}</div>
            <hr className="break" />
        </div>
    );
}

export default ArticleItem;
