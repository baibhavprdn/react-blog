// custom hooks need to be named as useName
import { useState, useEffect } from "react"

const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw Error('Could not find the url to fetch data')
          }
          setErrorMessage(null)
          return response.json()
        })
        .then((data) => {
          setData(data)
        })
        .catch((error) => {
          setErrorMessage(error.message)
        })
        .finally(() => setIsLoading(false))
    }, 1000)
  }, [url])

  return { data, isLoading, errorMessage }
  // return values from the hook
}

export default useFetch;