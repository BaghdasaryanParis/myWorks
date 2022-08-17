// import { combineReducers, createStore } from "redux";
import {createStore } from "redux";



const store = createStore(function (state, action) {
    if (action.type === "addobjects") {
        return {
            inArchive: [
                ...state.inArchive,
                {
                    name: action.payload.name,
                    attr1: action.payload.attr1,
                    attr2: action.payload.attr2,
                    img: action.payload.img,
                    count: 1,
                    price: action.payload.price,
                    id:action.payload.id,
                },
            ]
        }
    }
    if (action.type === "changeCount") {
        return {
            inArchive:[
                
                ...action.pyaload.object,
            ]
        }
    }
    if (action.type === "clear"){
        return {
            inArchive:[
            ]
        }
    }
    return state;

},
    {
        inArchive: [
            {
                name: "Сырный цыпленок",
                attr1: "тонкое тесто",
                attr2: "26",
                img: "image 5.png",
                count: 2,
                price: 770,
                id:1

            },

        ]
    }
);

export default store;