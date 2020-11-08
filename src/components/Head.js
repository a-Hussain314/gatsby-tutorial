import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function Head(props) {

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

    return (
        <Helmet>
            <title>{`${props.title} | ${data.site.siteMetadata.title}`}</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
            <meta name="description" content={props.desc}></meta>
        </Helmet>
    )
}
