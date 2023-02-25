const Layout  = (props: any) => {
    return (
        <>
            <div className="container mx-auto py-4 h-screen">
                {props.children}
            </div>
        </>
    )
}

export default Layout
