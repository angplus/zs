import React from 'react';

export default class Error extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const { initialProps } = this.props;
        return (
            <div style={{margin: "20px"}}>
                <p style={{"font-size": "5.0em"}}>{this.props.initialProps.statusCode}</p>
                <p style={{"font-size": "1.0em"}}>{this.props.initialProps.errorMessage}</p>
            </div>
        );
    }
}

Error.propTypes = {
    initialProps: React.PropTypes.shape({
        statusCode: React.PropTypes.number,
        errorMessage: React.PropTypes.string,
    }),
};