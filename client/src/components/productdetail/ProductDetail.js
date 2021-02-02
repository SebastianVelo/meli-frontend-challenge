import { Component } from "react";
import { withRouter } from "react-router";
import API from "../../const/API";

import Breadcrumb from "../breadcrumb/Breadcrumb";

import "./ProductDetail.css";

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseProduct: {},
            inProcess: true
        }
    }

    async getProduct() {
        await fetch(API.PATH_ITEMS + this.props.match.params.id)
            .then(res => res.json())
            .then(responseProduct => this.setState({ responseProduct }));

        await fetch(API.PATH_CATEGORY + this.state.responseProduct.item.category)
            .then(res => res.json())
            .then(categories => this.setState({ categories: categories, inProcess: false }));

    }

    async componentDidMount() {
        await this.getProduct();
    }

    async componentDidUpdate(prevProps) {
        let prevId = prevProps.match.params.id;
        let id = this.props.match.params.id;
        if (prevId !== id) {
            this.setState({ inProcess: true });
            await this.getProduct();
        }
    }

    render() {
        let product = this.state.responseProduct.item;
        return (
            !this.state.inProcess &&
            <div className="grid">
                <div className="col-10 offset-2">
                    <Breadcrumb items={this.state.categories.fullPath} />
                </div>
                <div className="col-10 offset-2 grid product-detail">
                    <div className="col-9">
                        <img className="product-detail-img" src={product.picture} alt={product.title}></img>
                    </div>
                    <div className="col-3">
                        <p className="product-detail-info">{product.condition} - {product.soldQuantity} vendidos </p>
                        <p className="product-detail-name">{product.title}</p>
                        <p className="product-detail-price">{product.price.currency} {product.price.amountFormatted}
                            <span className="product-detail-price-decimals">{product.price.decimals}</span>
                        </p>
                        <button className="button-primary">Comprar</button>
                    </div>
                    <div className="col-9">
                        <h1 className="product-detail-title">Descripción del producto</h1>
                        <p className="product-detail-description">{product.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(ProductDetail);