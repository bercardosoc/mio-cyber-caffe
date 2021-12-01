import { useSelector } from "react-redux";
import Product from "../Product"
import { Container } from "./styles";
import { Content, EachContent } from "../ProductList/styles";
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
                    <EachContent>
                        <Product key={item.id} product={item} isRemovable />
                    </EachContent>
                    </>
                ))
            }
            </Content>
        </Container>
    )
}
export default Cart