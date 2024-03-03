import { useState, useEffect } from "react";
import BlogList from "../components/blogList";

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
      id: 2
    },
    {
      title: 'Bowser\'s first blog',
      body: 'lorem ipsum...',
      author: 'Bowser',
      id: 3
    },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'Mario',
      id: 4
    },
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    console.log('use effect runs')
    // code runs everytime the component is rendered, initially then once the state is changed
  })

  return (
    <>
      <div className="content home">
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's blogs" handleDelete={handleDelete} /> */}
      </div>
    </>
  );
}

export default HomeNew;