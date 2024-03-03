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

  const [name, setName] = useState('mario')

  const handleNameChange = (name) => {
    setName(name)
  }

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    console.log('use effect runs')
    console.log(blogs)
    // code runs everytime the component is rendered, initially then once the state is changed
  }, [blogs])
  // useEffect Dependencies, 
  //run function depending on which state specified in the dependency array are changed

  return (
    <>
      <div className="content home">
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's blogs" 
        handleDelete={handleDelete} /> */}

        <p>{name}</p>

        <button onClick={() => handleNameChange('luigi')}>Click name</button>
      </div>
    </>
  );
}

export default HomeNew;