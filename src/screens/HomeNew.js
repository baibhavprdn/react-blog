import { useState } from "react";

const HomeNew = () => {

  const [blogs, setBlogs] = useState([
    {
      title: 'My new website',
      body: 'lorem ipsum...',
      author: 'Mario',
      id: 1
    },
    {
      title: 'Welcome party!',
      body: 'lorem ipsum...',
      author: 'Yoshi',
      id: 1
    },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'Bowser',
      id: 1
    },
  ])
  return (
    <>
      <div className="content home">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p> Written by {blog.author}</p>
          </div>
        ))}

      </div>
    </>
  );
}

export default HomeNew;