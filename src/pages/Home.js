import { Fragment } from "react";
import { Link } from 'react-router-dom'

const Home = () => {
    return <Fragment>
        <h1>My Home Page.</h1>
        <p><Link to="/products">Products</Link></p>
    </Fragment>
    
}

export default Home;