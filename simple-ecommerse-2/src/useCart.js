import { useDispatch, useSelector } from "react-redux"
import { setCartItems as cartItem } from "./store/action"
const useCart = () => {
    const {products, cartItems} = useSelector(state => state)
    const dispatch = useDispatch()

    const setCartItems = (items) => {
        dispatch(cartItem(items))
    }

    const addCartItem = (id) => {
        const item = products.find(product => product.id === id)
            const itemIndex = cartItems.findIndex(currentItem => currentItem.id === id)
            if (itemIndex === -1) {
                setCartItems([
                    ...cartItems,
                    {
                        ...item,
                        quantity: 1
                    }
                ]);
            } else {
                setCartItems(cartItems.map(currentItem =>
                    currentItem.id === id
                        ? {
                            ...item,
                            quantity: parseInt(item.quantity + 1)
                        }
                        : currentItem

                ));
            }
        // setCartItems([...cartItems, item])
    }
    const removeCartItems = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        const res = window.confirm("Are you sure to perform the action?")
        if (res === true) {
            setCartItems([])
        }
    }

    const total = cartItems.reduce((sum, cur) => sum + cur.price * cur.quantity, 0)


    return {
        total,
        cartItems,
        addCartItem,
        removeCartItems,
        clearCart
    }

}
export default useCart