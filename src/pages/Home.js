import { Fragment } from "react";
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products');
    }

    return <Fragment>
        <h1>My Home Page.</h1>
        <p><Link to="products">Products</Link></p>
        <button onClick={navigateHandler}>Go to Products</button>
    </Fragment>
    
}

export default Home;