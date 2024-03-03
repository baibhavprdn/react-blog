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
        <BlogList blogs={blogs} title="All blogs" />
      </div>
    </>
  );
}

export default HomeNew;