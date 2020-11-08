import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';


export default function NotFound() {
    return (
        <Layout>
            <Head title="Not Found"></Head>
            <div className="text-center ">
                <span className="text-danger ">Page Not Found</span> <br/>
                Go Back to <Link to="/">Homepage</Link>
            </div>
        </Layout>
    )
}
