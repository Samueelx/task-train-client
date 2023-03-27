function Header() {
    return (
        <header className="flex justify-between p-8 bg-emerald-200 z-50">
            <nav className="flex-1">
                <ul>
                    <li className="float-left">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-2">Home</a>
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
                <h1 className='text-3xl font-bold'>Portbased</h1>
            </div>

            <div className="flex-1">
                <ul>
                    <li className="float-right">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-2">Login</a>
                    </li>
                    <li className="float-right">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-2">Signup</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;