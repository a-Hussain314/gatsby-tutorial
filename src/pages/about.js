import React from 'react'
import {Link} from "gatsby";
import Layout from '../components/Layout';
import Head from '../components/Head';


export default function About() {
    return (
       <Layout>
           <Head title="About"></Head>
            <h4>About Page</h4>
            <Link to="/"> Go back To HomePage </Link>
       </Layout>
    )
}
