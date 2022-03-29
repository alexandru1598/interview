import React from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import ArticleItem from "../../components/ArticleItem/ArticleItem";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/").then((res) => {
            const articles = res.data;
            this.setState({
                articles: articles,
            });
        });
    }

    render() {
        const { articles } = this.state;
        return (
            <Layout>
                <div className="Home">
                    {articles.map((article, index) => (
                        <ArticleItem key={index} id={article.id} title={article.title} content={article.body} />
                    ))}
                </div>
            </Layout>
        );
    }
}

export default Home;
