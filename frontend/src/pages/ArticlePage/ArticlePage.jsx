import React from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import "./ArticlePage.css";

class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            comments: [],
        };
    }

    componentDidMount() {
        console.log(this.props);
        const getComments = () => {
            const comments = {
                method: "GET",
                url: "http://localhost:3001/comments",
                params: { post: "4" },
            };

            axios
                .request(comments)
                .then((response) => {
                    this.setState({ comments: response.data });
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const getArticle = () => {
            const article = {
                method: "GET",
                url: "http://localhost:3001/article",
                params: { post: "4" },
            };

            axios
                .request(article)
                .then((response) => {
                    this.setState({ article: response.data });
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        getArticle();
        getComments();
    }

    render() {
        const { comments } = this.state;
        const { article } = this.state;

        return (
            <Layout>
                {Object.keys(this.state.article).length > 0 ? (
                    <div className="article-page-item">
                        <div className="article-page-title">Title: {article.title}</div>
                        <div className="article-page-content">Content: {article.body}</div>
                    </div>
                ) : null}
                <div className="comments-container">
                    {comments.map((comment) => (
                        <div className="comment-item" key={comment.id}>
                            <span>Comment: </span>
                            {comment.body}
                        </div>
                    ))}
                </div>
            </Layout>
        );
    }
}

export default ArticlePage;
