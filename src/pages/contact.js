import React from 'react'
import {Link} from "gatsby";
import Layout from '../components/Layout';
import Head from '../components/Head';


export default function Contact() {
    return (
      <Layout>
        <Head title="Contact"></Head>
            <h4>Contact Page</h4>
            <Link to="/"> Go back To HomePage </Link> 
      </Layout>
    )
}
