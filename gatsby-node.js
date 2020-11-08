const path = require("path");
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    if(node.internal.type === "MarkdownRemark"){
        // const slug = path.basename(node.fileAbsolutePath, ".md")
        // console.log(JSON.stringify(node, undefined, 4));
        // console.log(slug);
        // createNodeField({
        //     node : node,
        //     name : "slug",
        //     value : slug
        // })
    }
  }
  
  module.exports.createPages= async ({ graphql, actions })=>{
      const {createPage} = actions;
      const postTemplate = path.resolve("./src/templates/Post.js");
      
      // (1) fetch all the mark down files xxxxxxx.md
      const res = await graphql(`
      query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
              }
              html
              excerpt
              fileAbsolutePath
            }
          }
        }
      }
      `)

      // (2) create a page for each file of them , with a same name as the file name
      res.data.allMarkdownRemark.edges.map((edge)=>{
        createPage({
              // the temaplte react component to create a page similar to it.
              component : postTemplate,
              // the url leads to this particular page , needs to be dynamic
              path : `/blog/${path.basename(edge.node.fileAbsolutePath, ".md")}`,
              // this is an object that gets passed to this paticular page 
              // you can access it througo props.pageContext 
              // i use it to pass the whole post data to the page 
              context : {
                frontmatter : edge.node.frontmatter,
                html : edge.node.html
              }
          })

      })
  }
  