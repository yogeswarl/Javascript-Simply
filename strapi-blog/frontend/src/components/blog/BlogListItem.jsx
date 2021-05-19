import React from 'react';
import {Link} from 'react-router-dom';
const BlogListItem = ({blogId, blogTitle, blogContent, featuredImage, categories }) =>{
  const category = categories.map((category)=> {
    return category.categoryName
  })
  return(
    <React.Fragment>
        <span className="card-header">{category}</span>
        <h2 className="mb-2">{blogTitle}</h2>
        <img src={`http://localhost:1337${featuredImage.formats.small.url}`} alt={`http://localhost:1337${featuredImage.alternativeText}`} />
        <div><Link to={`/single/${blogId}`} >Read this</Link></div>
    </React.Fragment>
  )
}

export default BlogListItem;