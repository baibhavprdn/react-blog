import { useState } from "react";
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

  return (
    <>
      <div className="content home">
        <BlogList blogs={blogs} title="All blogs" />
        <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's blogs" />
      </div>
    </>
  );
}

export default HomeNew;