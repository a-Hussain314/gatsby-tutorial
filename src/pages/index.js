import React from "react"
import {Link} from "gatsby";
import Layout from "../components/Layout";
import Head from '../components/Head';


export default function Home() {
  return (
  <>
  <Layout>
  <Head title="Home"></Head>
    <h4>HomePage</h4>
    <Link to="/blog"> Go To blog Page </Link><br/>
    <Link to="/contact"> Go To Contact Page </Link><br/>
    <Link to="/about"> Go To About Page </Link><br/>
  </Layout>
  </>
  )
}
