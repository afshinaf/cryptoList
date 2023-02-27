import { useRouter } from "next/router";
import { Layout } from '../../components'

const CryptoPage = () => {

    const { query }  = useRouter()
    const { crypto } = query

    return(
        <Layout>
            <h1 onClick={() => console.log(crypto)}>Hello world !</h1>
        </Layout>
    )
}

export default CryptoPage
