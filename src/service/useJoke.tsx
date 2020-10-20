import { useState, useEffect } from 'react'
import axios, { CancelToken } from 'axios'

const fetchJoke = async (cancelTokenSource, setJoke) => {
  try {
    const asyncResponse = await axios('https://api.icndb.com/jokes/random', {
      cancelToken: cancelTokenSource.token
    })
    const { value } = asyncResponse.data
    setJoke(value.joke)
  } catch (err) {
    if (axios.isCancel(err)) {
      return console.info(err)
    }
    console.error(err)
  }
}

const useJokeAsync = more => {
  const [joke, setJoke] = useState('')
  useEffect(() => {
    const cancelTokenSource = CancelToken.source()
    fetchJoke(cancelTokenSource, setJoke)
    return () => {
      cancelTokenSource.cancel('Cancelling previous http call because a new one was made ;-)')
    }
  }, [more])
  return joke
}

export default function RandomJoke({ more, loadMore }) {
  const joke = useJokeAsync(more)
  return (
    <div>
      <h1>Here's a random joke for you</h1>
      <h2>{`"${joke}"`}</h2>
      <button onClick={loadMore}>More...</button>
    </div>
  )
}
