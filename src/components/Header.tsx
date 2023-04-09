import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-between p-8 bg-emerald-200 z-50">
            <nav className="flex-1">
                <ul>
                    <li className="float-left">
                        <NavLink to='/' className="text-lg hover:text-sky-700 hover:underline mx-2">Home</NavLink>
                    </li>
                    <li className="float-left">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-2">Services & Prices</a>
                    </li>
                    <li className="float-left">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-2">Contact us</a>
                    </li>
                    <li className="float-left">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-2">Help</a>
                    </li>
                </ul>
            </nav>

            <div className="flex-1">
                <h1 className='text-3xl font-bold'>Task Train</h1>
            </div>

            <div className="flex-1">
                <ul>
                    <li className="float-right">
                        <NavLink to='login' className="text-lg hover:text-sky-700 hover:underline mx-2">Login</NavLink>
                    </li>
                    <li className="float-right">
                        <NavLink to ='signup' className="text-lg hover:text-sky-700 hover:underline mx-2">Signup</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;