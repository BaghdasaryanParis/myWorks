import Container from "react-bootstrap/esm/Container";
import "./shop.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ShopItems from "./shopItem";



function Shop() {
    var allPrice = 0;
    var allCount = 0;

    const dispatch = useDispatch();

    const archive = useSelector((state) => {
        return state.inArchive;
    });

    archive.map((value) => {
        allPrice += parseInt(value.price) * parseInt(value.count);
        allCount += parseInt(value.count);
    })


    

    return (
        <Container fluid>
            <section className="shop container-lg">
                <div className="shop_content">
                    <div className="shop_icons">
                        <div>
                            <img src={require("../../img/shop/shopping_cart.png")} alt="img" />
                            <p>Корзина</p>
                        </div>
                        <div>
                            <img src={require("../../img/shop/trash.png")} alt="img" />
                            <p onClick={() => {
                                dispatch({
                                    type: "clear"
                                }
                                )

                            }}>Очистить корзину</p>
                        </div>
                    </div>


                    {
                        
                        archive.map((value) => {
                            return <ShopItems name={value.name} price={value.price} attr1={value.attr1} attr2={value.attr2} img={value.img} count={value.count} id={value.id} />;

                        })
                    }



                    <div className="count_price">
                        <p>Всего пицц:<span> {allCount} шт.</span></p>
                        <p>Сумма заказа:<span>{allPrice} ₽</span></p>
                    </div>
                    <div className="shop_nav">
                        <Link to="/"><button className="back">Вернуться назад</button></Link>
                        <Link to="/"><button className="buy">Оплатить сейчас</button></Link>
                    </div>

                </div>
            </section>
        </Container>
    );
}

export default Shop;