import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();

    return <Fragment>
        <h1>Product Detail</h1>
        <p>{params.productID}</p>
    </Fragment>;
}

export default ProductDetail;