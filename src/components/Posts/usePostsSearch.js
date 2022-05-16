import { useEffect, useState } from 'react'
import UserService from '../../services/UserService';

export default function usePostsSearch(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    const data = {
        "username": "ljubo",
        "page" : 1
    }
    UserService.feed(data)
        .then(res=>{
            setHasMore(res.data.lastPage !== pageNumber)
            setPosts(prevPosts => {
                return [...new Set([...prevPosts, ...res.data.posts.map(post=> post)])]
              })
              setLoading(false)
        }).catch(e=>{
            setError(true)
        })
    return () => cancel()
  }, [pageNumber])

  return { loading, error, posts, hasMore }
}