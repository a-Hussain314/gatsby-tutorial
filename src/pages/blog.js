import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout';
import Head from '../components/Head';
const path = require("path");

export default function Blog() {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date
          }
          fileAbsolutePath
        }
      }
    }
  }

`)


    return (
      <Layout>
        <Head title="Blogs" desc={"blogs page"}></Head>
            <h3>blogs Page</h3>
            {data.allMarkdownRemark.edges.map((post, index)=>{
              console.log(post.node);
              return(
                <div key={index}>
                  <h4>
                    <Link to={`/blog/${path.basename(post.node.fileAbsolutePath, ".md")}`} >{post.node.frontmatter.title}</Link>&nbsp;&nbsp;
                  </h4>
                  <small>{post.node.frontmatter.date}</small>
                </div>
              )
            })}
      </Layout>
    )
}


