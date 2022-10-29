import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <main className='md:container md:mx-auto px-5 md:px-0'>
                {children}
            </main>
        </div>
    );
}

export default Layout;