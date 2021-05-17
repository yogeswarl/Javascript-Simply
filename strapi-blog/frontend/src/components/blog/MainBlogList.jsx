import React from 'react';
import fetch from 'isomorphic-fetch';
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
      <>
        {
          this.state.blogs.map(({ id, blogTitle, blogContent, featuredImage, categories }) => {  
            <div>
              <h2>{blogTitle}</h2>
              <p>{blogContent}</p>
            </div>
            }
          )
        }

      </>
    )
  }
}

export default blogList;