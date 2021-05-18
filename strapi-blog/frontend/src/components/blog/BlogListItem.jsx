import React from 'react';

const BlogListItem = ({id, blogTitle, blogContent, featuredImage, categories }) =>{
  const category = categories.map((category)=> {
    return category.categoryName
  })
  return(
    <React.Fragment>
        <span className="card-header">{category}</span>
        <h2>{blogTitle}</h2>
        <p>{blogContent}</p>
        <img src={`http://localhost:1337${featuredImage.formats.small.url}`} />
    </React.Fragment>
  )
}

export default BlogListItem;