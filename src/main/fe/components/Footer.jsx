import React from 'react';

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      return (
        <footer style={{
                        background: '#f3f4f6', height: '63px', minHeight: '63px',
                        alignItems: 'center', display:'block'
                    }}>
            <p style={{color: '#292826', width: '100%', fontSize: '14px', lineHeight: '31px', textAlign: 'center',margin:'0'}}>
                版权所有：康泰塑胶科技集团有限公司<br/>本站由<img src="/images/wr.jpg" style={{height: '30px', width: '60px'}} />搭建
            </p>
        </footer>
      );
    }
}

Footer.propTypes = {
};

