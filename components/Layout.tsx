import { Header, Main, Footer} from './index'

const Layout  = () => {
    return (
        <>
            <div className="container mx-auto py-4 h-screen">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}

export default Layout
