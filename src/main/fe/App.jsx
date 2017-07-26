import React from 'react';

import Product from './views/Product.jsx';
import ProductDetail from './views/ProductDetail.jsx';
import BatchInfo from './views/BatchInfo.jsx';
import Query from './views/Query.jsx';
import Dashboard from './views/Dashboard.jsx';
import Error from './views/Error.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    static renderRouterNotFoundView(routePath) {
        return (
            <div>
                <p>{routePath} could not be found!</p>
            </div>
        );
    }

    render() {
        const {
            route,
        } = this.props;

        let view;

        switch(route) {
            case 'index':
                view = (
                    <div>
                        <p>Hello</p>
                    </div>
                );
                break;
            case 'product':
                view = (
                    <Product initialProps={ this.props.initialProps } />
                );
                break;
            case 'productDetail':
                view = (
                    <ProductDetail initialProps={ this.props.initialProps } />
                );
                break;
            case 'batch':
                view = (
                    <BatchInfo initialProps={ this.props.initialProps } />
                );
                break;
            case 'query':
                view = (
                    <Query initialProps={ this.props.initialProps } />
                );
                break;
            case 'dashboard':
                view = (
                    <Dashboard initialProps={ this.props.initialProps } />
                );
                break;
            case 'error':
                view = (
                    <Error initialProps={ this.props.initialProps } />
                );
                break;
            default:
                view = App.renderRouterNotFoundView(route);
                break;
        }

        return view;
    }
}

App.propTypes = {
    route: React.PropTypes.string,
    initialProps: React.PropTypes.any,
};

App.defaultProps = {
    route: $ROUTE,
    initialProps: $PROPS,
};
