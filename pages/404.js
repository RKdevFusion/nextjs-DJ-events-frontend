import {FaExclamationTriangle} from "react-icons/fa"
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css"

export default function PageNotFound() {
  return (
    <Layout>
        <div className={styles.error}>
            <h1>
                <FaExclamationTriangle/> 404</h1>
            <h4>Sorry, there is nothing here!</h4>
            <Link href="/">Go Home</Link>
        </div>
    </Layout>
  )
}
