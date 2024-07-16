import { Product } from "../../models/ProductModel";

function ProductItem(props: Product) {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td>{props.price}</td>
            </tr>
        </>
    );
}

export default ProductItem;