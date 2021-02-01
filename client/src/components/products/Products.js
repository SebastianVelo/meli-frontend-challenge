import { Component } from "react";
import { withRouter } from "react-router";
import queryString from 'query-string';
import API from "../../const/API";

import Card from "./card/Card";
import Breadcrumb from "../breadcrumb/Breadcrumb";

import "./Products.css";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseSearch: {},
            paging: {
                totalPages: 0,
                page: 0,
                perPage: 4
            },
            categories: {},
            inProcess: true
        }
    }

    setPaging() {
        let products = this.state.responseSearch.items;
        let paging = {
            totalPages: products.size / 4,
            page: 0,
            perPage: 4
        }
        this.setState({ paging });
    }

    getPaginatedProducts() {
        let products = this.state.responseSearch.items;
        let start = this.state.paging.page * this.state.paging.perPage;
        let end = start + this.state.paging.perPage;
        return products.slice(start, end);
    }

    async getSearch() {
        this.setState({ inProcess: true });

        let query = queryString.parse(this.props.location.search).search;
        await fetch(API.PATH_SEARCH + query)
            .then(res => res.json())
            .then(responseSearch => this.setState({responseSearch}));

        let categoriesSortedByResults = this.state.responseSearch.categories.sort((c1, c2) => c2.results-c1.results);
        await fetch(API.PATH_CATEGORY + categoriesSortedByResults[0].id)
            .then(res => res.json())
            .then(categories => this.setState({ categories: categories, inProcess: false }));

        this.setPaging();
    }

    async componentDidMount() {
        await this.getSearch();
    }

    async componentDidUpdate(prevProps) {
        let prevQuery = queryString.parse(prevProps.location.search).search;
        let query = queryString.parse(this.props.location.search).search;
        if (prevQuery !== query) {
            await this.getSearch();
        }
    }

    render() {
        return (
            !this.state.inProcess &&
            <div className="grid products-wrapper">
                <div className="col-10 offset-2">
                    <Breadcrumb items={this.state.categories.fullPath} />
                </div>
                {this.getPaginatedProducts().map(product =>
                    <div className="col-10 offset-2" key={product.id}>
                        <Card product={product} />
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(Products);
