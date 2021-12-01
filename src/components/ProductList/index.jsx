import { useSelector } from "react-redux"
import Product from "../Product"
import { SiBuymeacoffee } from "react-icons/si"
import { Container, Content, EachContent } from "./styles"


const ProductList = () => {
    const products = useSelector((store) => store.products)
    return (
        <Container>
        <h2> <SiBuymeacoffee/> Cafézinhos para viagem </h2>
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