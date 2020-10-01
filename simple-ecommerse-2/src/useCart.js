const { useState } = require("react")

const useCart = (init, products) => {
    const [cartItems, setCartItems] = useState(init)

    const addCartItem = (id) => {
        const item = products.find(product => product.id === id)
        setCartItems(items => {
            const itemIndex = items.findIndex(currentItem => currentItem.id === id)
            if (itemIndex === -1) {
                return [
                    ...items,
                    {
                        ...item,
                        quantity: 1
                    }
                ];
            } else {
                return items.map(currentItem =>
                    currentItem.id === id
                        ? {
                            ...item,
                            quantity: parseInt(item.quantity + 1)
                        }
                        : currentItem

                );
            }
        })
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
    return {
        cartItems,
        addCartItem,
        removeCartItems,
        clearCart
    }

}
export default useCart