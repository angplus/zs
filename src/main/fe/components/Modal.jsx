import React from 'react';

export default class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.onBackgroundClick = this.onBackgroundClick.bind(this);
    }

    onBackgroundClick(e) {
        if (e.target.className === 'modalBackground') {
            this.props.onClose();
        }
    }

    render() {
        const { children,
            show } = this.props;

        if (!show) {
            return null;
        }

        return (
            <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    background: 'rgba(0, 0, 0, 0.8)',
                    zIndex: 99999,
                    transition: 'opacity 1s ease-in',
                    pointerEvents: 'auto',
                    overflowY: 'auto',
                }}
                className="modalBackground"
                onClick={this.onBackgroundClick}>
                <span
                    className="modalBackground"
                    style={{
                        position: 'absolute',
                        top: '15px',
                        right: '35px',
                        color: '#f1f1f1',
                        fontSize: '40px',
                        fontWeight: 'bold',
                        transition: '0.3s'}}>
                    ×
                </span>
                {children}
            </div>
        );
    }
}

Modal.propTypes = {
    children: React.PropTypes.any,
    show: React.PropTypes.bool,
    onClose: React.PropTypes.func,
};

