import React from "react";
import fetch from "isomorphic-fetch"
class SingleBlog extends React.Component {
  constructor() {
    super()
    this.state = {
      SingleBlog: [],
      BlogImage: ""
    }
  }
  componentDidMount() {
    fetch(`http://localhost:1337/blogs/${this.props.match.params.postid}`).then((response) => {
      if (response.status === 400) {
        throw new Error('Something is wrong')
      }

      return response.json();
    }).then((blog) => {
      this.setState({ SingleBlog: blog });
      this.setState({ BlogImage: blog.featuredImage.url });
    })
  }

  render() {
    const { blogTitle, blogContent } = this.state.SingleBlog;
    return (
      <React.Fragment>
        <section className="section">
          <h2 className="mb-2">{blogTitle}</h2>
          <p  className="mb-4">{blogContent}</p>
          <img src={`http://localhost:1337${this.state.BlogImage}`} alt="" />
        </section>
      </React.Fragment>

    )
  }
}
export default SingleBlog