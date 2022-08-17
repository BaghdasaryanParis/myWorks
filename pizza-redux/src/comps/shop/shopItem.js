import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
function ShopItems(props) {
    const dispatch = useDispatch();

    const archive = useSelector((state) => {
        return state.inArchive;
    });
    const [changeStore, setChangeStore] = useState({});
    useEffect(() => {
        new Promise((Resolve) => {
            if(changeStore.name === " "){
                let obj = archive;
                obj.map((value)=>{
                    if(value.id === changeStore.id){
                       
                            let tiv = obj.findIndex((obj1)=>{
                                return obj1 == value;
                            })
                      
                        
                        obj.splice(0,0)
                    }
                })
                Resolve(dispatch({
                    type: "changeCount",
                    payload: {
                        object: obj,

                    }
                }))
            }
            if (changeStore.name === "-") {
                let obj = archive;
                console.log(archive)
                obj.map((value) => {
                    if (value.id === changeStore.id) {
                        value.count--;
                    }
                });

                Resolve(dispatch({
                    type: "changeCount",
                    payload: {
                        object: obj,

                    }
                }))

            }
            if (changeStore.name === "+") {
                let obj = archive;
                console.log(archive)
                obj.map((value) => {
                    if (value.id === changeStore.id) {
                        value.count++;
                    }
                });

                Resolve(dispatch({
                    type: "changeCount",
                    payload: {
                        object: obj,

                    }
                }))

            }
        }).then(
            (value) => { return () => { return value } }
        )

        console.log("asdsa")
    }, [changeStore])
    return (
        <div className="shop_items">
            <div className="shop_item_block">
                <img src={require(`../../img/content/${props.img}`)} alt="asd" />
                <div className="item_attr">
                    <h2>{props.name}</h2>
                    <p><span>{props.attr1}</span>,<span>{props.attr2}</span></p>
                </div>
                <div className="item_count">
                    <button onClick={() => {
                        setChangeStore({ name: "-", obj: archive, id: props.id })
                    }}>-</button>
                    <p>{props.count}</p>
                    <button onClick={() => {
                        setChangeStore({ name: "+", obj: archive, id: props.id })
                    }}>+</button>
                </div>
                <p className="item_price">
                    <span>{props.price}</span>₽
                </p>
                <img  onClick={() => {
                        setChangeStore({ name: " ", obj: archive, id: props.id })
                    }} className="x" src={require("../../img/shop/x.png")} alt="asd" />
            </div>
        </div>
    );
}
export default ShopItems;