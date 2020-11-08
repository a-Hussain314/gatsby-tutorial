import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


export default function Header() {
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
        <div className="bg-light text-center d-flex align-items-center justify-content-between p-3">
            <h1 className="m-0">{data.site.siteMetadata.title}</h1>
            <ul style={{listStyle:"none"}} className="d-flex m-0">
                <li className="mx-2 my-0" > <Link activeClassName="text-danger" to="/">Home</Link> </li>
                <li className="mx-2 my-0" > <Link activeClassName="text-danger" to="/about">About</Link> </li>
                <li className="mx-2 my-0" > <Link activeClassName="text-danger" to="/blog">blog</Link> </li>
                <li className="mx-2 my-0" > <Link activeClassName="text-danger" to="/contact">Contact</Link> </li>
            </ul>
        </div>
    )
}
