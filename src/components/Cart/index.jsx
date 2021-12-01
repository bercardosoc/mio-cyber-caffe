import { useSelector } from "react-redux";
import Product from "../Product"
import { Container, Content, EachBuy } from "./styles";
import { BsCart4 } from "react-icons/bs"

const Cart = () => {
    const cart = useSelector((store) => store.cart)

    return (
        <Container>
            <h2>Carrinho de compras <BsCart4 size={25} /> </h2>
            <Content>
            {
                cart.map((item) => (
                    <>
                    <EachBuy>
                        <Product key={item.id} product={item} isRemovable />
                    </EachBuy>
                    </>
                ))
            }
            </Content>
        </Container>
    )
}
export default Cart