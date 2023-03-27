import { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const PRODUCTS = [
        {id: 'p1', title: 'Product 1'},
        {id: 'p2', title: 'Product 2'},
        {id: 'p3', title: 'Product 3'}
    ]

    return <Fragment>
        <h1>Products Page.</h1>
        <ul>
            {/* <li><Link to='/products/product1'>Products 1</Link></li>
            <li><Link to='/products/product2'>Products 2</Link></li>
            <li><Link to='/products/product3'>Products 3</Link></li> */}
            {PRODUCTS.map(productData => <li key={productData.id}>
                <Link to={`/products/${productData.id}`}>{productData.title}</Link>
            </li>)}
        </ul>
    </Fragment>
}

export default Products;