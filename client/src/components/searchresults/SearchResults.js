import { Component } from "react";
import { withRouter } from "react-router";
import queryString from 'query-string';

import Card from "./card/Card";
import Breadcrumb from "../breadcrumb/Breadcrumb";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseSearch: {},
            categories: {},
            inProcess: true
        }
    }

    async getSearch() {
        let query = queryString.parse(this.props.location.search).search;
        await fetch("http://localhost:5000/api/items?query=" + query)
            .then(res => res.json())
            .then(responseSearch => this.setState({ responseSearch: responseSearch }));

        await fetch("http://localhost:5000/api/category/" + this.state.responseSearch.categories[0].id)
            .then(res => res.json())
            .then(categories => this.setState({ categories: categories, inProcess: false }));
    }

    async componentDidMount() {
        await this.getSearch();
    }

    async componentDidUpdate(prevProps) {
        let prevQuery = queryString.parse(prevProps.location.search).search;
        let query = queryString.parse(this.props.location.search).search;
        if (prevQuery !== query) {
            this.setState({ inProcess: true });
            await this.getSearch();
        }
    }

    render() {
        return (
            !this.state.inProcess &&
            <div className="grid">
                <div className="col-10 offset-2">
                    <Breadcrumb items={this.state.categories.fullPath} />
                </div>
                {this.state.responseSearch.items.map(product =>
                    <div className="col-10 offset-2" key={product.id}>
                        <Card product={product} />
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(SearchResults);
