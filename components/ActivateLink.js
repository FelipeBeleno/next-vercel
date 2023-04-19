import Link from "next/link"
import { useRouter } from "next/router"

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}
const ActivateLink = ({ texto,
    href }) => {


    const { asPath } = useRouter()

    return (
        <Link href={href} legacyBehavior>
            <a style={asPath === href ? style: null} >
                {texto}
            </a>
        </Link>
    )
}

export default ActivateLink
