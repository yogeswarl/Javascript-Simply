import React from 'react';
import fetch from 'isomorphic-fetch';
import BlogListItem from './BlogListItem';
class blogList extends React.Component {
  constructor() {
    super()
    this.state = {
      blogs: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:1337/blogs').then((response) => {
      if (response.status === 400) {
        throw new Error('Something is wrong')
      }

      return response.json();
    }).then((blogs) => {
      this.setState({ blogs: blogs });
    })
  }
  render() {
    return (
      <ul className="fx fx-wrap col-2">
        {
          this.state.blogs.map(({ id, blogTitle, blogContent, featuredImage, categories }) => {  

        return <li  className = "card">
            <BlogListItem key = {id} blogId = {id} blogTitle ={blogTitle} blogContent = {blogContent} featuredImage={featuredImage} categories = {categories}/>  
          </li>
          })
        }

      </ul>
    )
  }
}

export default blogList;