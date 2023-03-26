import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    return <Fragment>
        <MainNavigation />
        <main>
            <h1>An Error has occured !</h1>
            <p>Could not find the page.</p>
        </main>
    </Fragment>
}

export default ErrorPage;