import { useSelector } from "react-redux"
import Product from "../Product"
import { Container, Content, EachContent } from "./styles"


const ProductList = () => {
    const products = useSelector((store) => store.products)
    return (
        <Container>
        <h1>Ber & Lu</h1>
            <Content>
            {
                products.map((item) => (
                    <EachContent>
                    <Product product={item} key={item.key} />
                    </EachContent>
                ))
            }
            </Content>
        </Container>
    )
}
export default ProductList