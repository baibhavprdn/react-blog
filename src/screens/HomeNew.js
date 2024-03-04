import BlogList from "../components/blogList";
import useFetch from "../hooks/useFetch";

const HomeNew = () => {
  const { data: blogs, isLoading, errorMessage } = useFetch('http://localhost:8000/blogs')

  return (
    <>
      <div className="content home">
        {/* conditional rendering in react */}
        {
          errorMessage && <div>Error: {errorMessage}</div>
        }
        {
          isLoading && <div>Loading..</div>
        }
        {blogs && <BlogList blogs={blogs} title="All blogs" />}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's blogs" 
        handleDelete={handleDelete} /> */}

        {/* <p>{name}</p>

        <button onClick={() => handleNameChange('luigi')}>Click name</button> */}
      </div>
    </>
  );
}

export default HomeNew;