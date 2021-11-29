import { useSelector } from "react-redux";
import Product from "../Product"

const Cart = () => {
    const cart = useSelector((store) => store.cart)

    return (
        <>
            <h3>Carrinho de compras</h3>
            {
                cart.map((item) => (
                    <Product key={item.id} product={item} isRemovable />
                ))
            }
        </>
    )
}
export default Cart