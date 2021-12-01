import Cart from "../../components/Cart"
import ProductList from "../../components/ProductList"
import {Container, Background} from "./styles"
const Home = () => {
    return (
        <Background>
        <h1>Ber & Lu</h1>
        <Container>
            <ProductList />
            <Cart />
        </Container>
        </Background>
    )
}
export default Home