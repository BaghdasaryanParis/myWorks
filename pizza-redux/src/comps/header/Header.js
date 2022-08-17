import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <Container fluid>
            
            <header className="container-lg">
                    <div className="logo_content">
                        <img src={require('../../img/header/logo.png')} alt="img"/>
                        <div>
                            <h2>React Pizza</h2>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                    <div className="payment">
                        <p className="money">520<span>$</span></p>
                        <Link to="/shop"><img src={require('../../img/header/shop.png')} alt="img"  /></Link>
                        <p>0</p>
                    </div>
            </header>
        </Container>
    );
}
export default Header;