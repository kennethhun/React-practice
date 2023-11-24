import { Outlet, Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dog">Dog</Link>
                </li>
                <li>
                    <Link to="/app">Tic-Tac-Toe</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
};

export default Nav;