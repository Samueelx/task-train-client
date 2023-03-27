import './Homepage.css'
import Header from './Header';

function Homepage() {
    return (
        <div className='bg_image mb-8'>
            <Header />
            <div className='text-cyan-200 flex justify-center items-center'>
                <p className='text-center m-20 p-10 text-xl font-mono font-medium leading-loose flex-1'>
                    Portbased is a multi-tenant portfolio web application software platform that allows multiple users
                    or tenants to access and manage their respective portfolios through a shared interface.
                    Each tenant can create and manage their own portfolio.
                </p>
            </div>

            <div>
                <button
                    type="button"
                    className="inline-block rounded border-2 border-neutral-50 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Get started
                </button>
            </div>
        </div>
    );
}

export default Homepage;