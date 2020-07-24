import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="copyright">
                    &copy; <a href="https://derickmakuto.tech/" target="_blank" className="link"  rel="noopener noreferrer"><p>2020 Simiyu Derick Makuto.</p></a> 
                    <p>Powered by</p>
                    <a href="https://www.yelp.com/developers/" target="_blank" className="link"  rel="noopener noreferrer"><p>yelp.com</p></a>.
                </div>
            </footer>
        )
    }
}

export default Footer;