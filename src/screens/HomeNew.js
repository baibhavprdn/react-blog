import { useState, useEffect } from "react";
import BlogList from "../components/blogList";

const HomeNew = () => {
  const [blogs, setBlogs] = useState(null)

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
    fetch('http://localhost:8000/blogs')
      .then(response => {
        return response.json()
      })
      .then((data) => {
        setBlogs(data)
      })
  }, [blogs])
  // useEffect Dependencies, 
  //run function depending on which state specified in the dependency array are changed

  return (
    <>
      <div className="content home">
        {/* conditional rendering in react */}
        {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's blogs" 
        handleDelete={handleDelete} /> */}

        <p>{name}</p>

        <button onClick={() => handleNameChange('luigi')}>Click name</button>
      </div>
    </>
  );
}

export default HomeNew;