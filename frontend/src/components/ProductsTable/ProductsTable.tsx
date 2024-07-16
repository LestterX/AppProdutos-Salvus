import { useContext, useDeferredValue, useEffect, useState } from "react";
import { GetAll } from "../../api/get/GetAll";
import { Product } from "../../models/ProductModel";
import ProductItem from "../ProductItem/ProductItem";
import { SearchContext } from "../../context/SearchContext";

function ProductsTable() {
    const [products, setProducts] = useState<Product[]>([])
    const { searchFilter, searchLimit, searchPage, searchOrderBy } = useContext(SearchContext)
    const searchFilterDeffered = useDeferredValue(searchFilter)
    const searchLimitDeffered = useDeferredValue(searchLimit)
    const searchPageDeffered = useDeferredValue(searchPage)
    const searchOrderByDeffered = useDeferredValue(searchOrderBy)
    // console.log('searchFilterDeffered: ', searchFilterDeffered);
    // const filteredProducts = searchFilter.length > 0 ? products.filter(product => { product.name.includes(searchFilter) }) : products
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await GetAll(searchFilterDeffered, searchLimitDeffered, searchPageDeffered, searchOrderByDeffered)
                if (response?.status === 200) { setProducts(response.data.products) }
                return
            } catch (error) {
                console.log('An error occurred', error);
            }
        }
        getAllProducts()
    }, [searchFilterDeffered, searchLimitDeffered, searchOrderByDeffered, searchPageDeffered])
    return (
        <>
            <table className="w-11/12 my-0 mx-auto">
                <thead className="bg-slate-600 border-slate-600 rounded-lg ">
                    <tr>
                        <td className="font-bold">NOME</td>
                        <td className="font-bold">DESCRIÇÃO</td>
                        <td className="font-bold">VALOR</td>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map(product => {
                        return (<ProductItem key={product.id} name={product.name} description={product.description} price={product.price} />)
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ProductsTable;