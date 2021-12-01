import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../store/modules/cart/actions"

const Product = ({ product, isRemovable = false}) => {

    const { name, img, description, price, id } = product

    const dispatch = useDispatch()

    return (
        <>
            <h2>{name}</h2>
            <img src= {img} alt={name} />
            <p>{description}</p>
            <span>{price.toFixed(2)}R$</span>
            {
                isRemovable ? (
                    <button onClick={() => dispatch(removeFromCart(id))} >
                        Remover
                    </button>
                ) : (
                    <button onClick={() => dispatch(addToCart(product))} >
                        Comprar
                    </button>
                )
            }
        </>
    )
}
export default Product