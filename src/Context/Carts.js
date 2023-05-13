import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let cartcontext = createContext()
export function CartContextProvider(props) {

    // let [numOfCartItems, setnumOfCartItems] = useState('')
    // async function getlogedcard() {
    //     let { data } = await getcart()
    //     setnumOfCartItems(data.carts[0].totalProducts);

    // }
    // useEffect(() => {
    //     getlogedcard()
    // }, [])

    // function getcart() {
    //     return axios.get('https://dummyjson.com/carts').then((response) => response)
    //         .catch((error) => error)
    // }

    let [cart, setcart] = useState([])

    let [ItemAmount, setItemAmount] = useState(0)
    let [total, settotal] = useState(0)

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0); setItemAmount(amount)
        }
    }, [cart]);

    useEffect(() => {
        if (cart) {
            const tolal = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.price * currentItem.amount;
            }, 0); settotal(tolal)
        }
    }, [cart]);





    function addcart(prodect, id) {
        // const cart = JSON.parse(localStorage.getItem('cart'))
        const newitems = { ...prodect, amount: 1 }
        console.log(newitems);
        const cartitems = cart.find((item) => { return item.id === id; })
        if (cartitems) {
            const newcart = [...cart].map(item => {
                if (item.id == id) {
                    return { ...item, amount: cartitems.amount + 1 }

                } else {
                    return item;
                }
            });
            // localStorage.setItem('cart', JSON.stringify(newcart))
            setcart(newcart)
            console.log(newcart)
        } else {
            setcart([...cart, newitems])

        }


    }


    function removecard(id) {
        const newcart = cart.filter((item) => {
            return item.id !== id;
        });
        setcart(newcart)

    }
    // let [quantity, setquantity] = useState([])
    // function updateup(prodect, id) {
    //     const newitems = { ...prodect, Qantity: 2 }
    //     console.log(newitems);
    //     const cartitems = quantity.find((item) => { return item.id === id; })
    //     if (cartitems) {
    //         const newcart = [...quantity].map(item => {
    //             if (item.id == id) {
    //                 return { ...item, Qantity: cartitems.Qantity + 1 }

    //             } else {
    //                 return item;
    //             }
    //         });
    //         setquantity(newcart)
    //         console.log(newcart)

    //     } else {
    //         setquantity([...quantity, newitems])
    //     }

    // }
    // function updatedowen(prodect, id) {
    //     const newitem = { ...prodect, Qantity: 1 }
    //     console.log(newitem);
    //     const cartitem = quantity.find((item) => { return item.id === id; })
    //     if (cartitem) {
    //         const newcart = quantity.map(item => {
    //             if (item.id == id) {
    //                 return { ...item, Qantity: cartitem.Qantity - 1 && 1 }
    //             }

    //             else {
    //                 return item;
    //             }
    //         });
    //         setquantity(newcart)
    //         console.log(newcart)

    //     }




    // }

    return <cartcontext.Provider value={{ cart, total, ItemAmount, addcart, removecard }}>
        {props.children}

    </cartcontext.Provider>
}