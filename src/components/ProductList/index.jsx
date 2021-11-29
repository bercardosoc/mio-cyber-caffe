import { useSelector } from "react-redux"
import Product from "../Product"


const ProductList = () => {
    const products = useSelector((store) => store.products)
    return (
        <>
            {
                products.map((item) => (
                    <Product product={item} key={item.key} />
                ))
            }
        </>
    )
}
export default ProductList