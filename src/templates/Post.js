import React from 'react';
import Head from '../components/Head';
import Layout from "../components/Layout";

import "./template.scss";
export default function Post(props) {
    console.log(props)
    return (
       <Layout>
           <Head title={props.pageContext.frontmatter.title}></Head>
            <h3>{props.pageContext.frontmatter.title}</h3>
            <small>{props.pageContext.frontmatter.date}</small>
            <div dangerouslySetInnerHTML={{__html : props.pageContext.html}}></div>
       </Layout>
    )
}
