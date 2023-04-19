import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";



export default function About() {

    return <MainLayout>
        <h1>about</h1>
        <div >
            <p>
                ir a
                <Link href="/">
                    home
                </Link>
            </p>

        </div>


    </MainLayout>


}