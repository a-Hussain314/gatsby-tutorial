import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Footer() {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title,
                author
            }
        }
    }
`)
// console.log(data.site.siteMetadata);
    return (
        <div className="bg-secondary text-center text-light p-3">
            footer component - {data.site.siteMetadata.author}
        </div>
    )
}
