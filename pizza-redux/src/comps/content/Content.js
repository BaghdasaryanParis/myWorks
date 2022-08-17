import './content.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


function Post(props) {
    const dispatch = useDispatch()
    function getProps(e) {
        let idBlock = new Date().getTime();
        let allProps = {};
        e.target.parentElement.parentElement.classList.add("thiselement");

        allProps.img = props.img;
        allProps.name = props.name
        allProps.price = props.price;
        allProps.count = 1;
        let getAttr = document.querySelectorAll(".thiselement .type_select input");
        let falsecount = 0;
        for (let i = 0; i < getAttr.length; i++) {
            if (getAttr[i].checked === true) {
                if (getAttr[i].name === "attr1") {
                    allProps.attr1 = getAttr[i].nextElementSibling.innerHTML;
                }
                else {
                    allProps.attr2 = getAttr[i].nextElementSibling.innerHTML;
                }

            }
            else {
                falsecount++;
                if (falsecount === 4) {
                    return false;
                }
            }


        }
        
        
        
        dispatch({
            type: "addobjects",
            payload: {
                name: allProps.name,
                attr1: allProps.attr1,
                attr2: allProps.attr2,
                img: allProps.img,
                count:1,
                price: allProps.price,
                id:idBlock,
            }
        })
        console.log(allProps);
    }


    return (
        <div className='content_block'>
            <div className='block_img'>
                <img src={require(`../../img/content/${props.img}`)} alt="pizza" />
                <p>{props.name}</p>
            </div>
            <div className='type_select'>
                <ul>
                    <li>

                        <input type="radio" id='first'  name='attr1' />
                        <label htmlFor="first">тонкое</label>

                    </li>
                    <li>

                        <input type="radio" id='second' name='attr1' />
                        <label htmlFor="second">традиционное</label>
                    </li>
                </ul>
                <ul>
                    <li>
                        <input type="radio" id='small'  name='attr2' />
                        <label htmlFor="small">26 см.</label>
                    </li>
                    <li>

                        <input type="radio" id='middle' name='attr2' />
                        <label htmlFor="middle">30 см.</label>
                    </li>
                    <li>
                        <input type="radio" id='large' name='attr2' />
                        <label htmlFor="large">40 см.</label>
                    </li>
                </ul>
            </div>
            <div className='pizza_add'>
                <p className='price'>от <span>{props.price}</span> ₽</p>
                <button onClick={getProps}>+ Добавить</button>
            </div>
        </div>
    )
}
function Content() {

    const [blocks, setBlocks] = useState([]);
    useEffect(() => {
        async function getResource(url) {
            const res = await fetch(`${url}`);
            if (!res.ok) {
                throw new Error(`Could not fetch ${url},status:${res.status}`)
            }
            return await res.json()
        }
        getResource("http://localhost:3001/pizzas")
            .then(data => setBlocks(data)) //callback hell
            .catch(err1 => console.error("asd"))

    },
        [])
    return (
        <section id='content' className='container-fluid'>
            <div className='content_blocks container-lg'>
                {blocks.map((index) => {
                    return <Post img={index.img} name={index.name} price={index.price}/>
                })
                }
            </div>
        </section>
    );
}
export default Content;