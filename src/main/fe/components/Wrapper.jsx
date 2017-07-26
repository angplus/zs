import React from 'react';

import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'

export default class Wrapper extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props;

        return (
            <div style={{minHeight: '100%'}}>
                <NavBar
                    disableBack={this.props.disableBack}
                />
                <div className="container" style={{width: '100%', minHeight:'75%'}} >
                    {children}
                </div>
                <Footer />
            </div>
        );
    }
}

Wrapper.propTypes = {
    children: React.PropTypes.any,
    disableBack: React.PropTypes.bool,
};

