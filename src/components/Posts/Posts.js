import classes from './Posts.module.css';
import React, { useState,useEffect} from 'react'
import Post from '../Post/Post';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserService from '../../services/UserService'

function Posts(){
    const [pageNumber, setPageNumber] = useState(1)
    const [posts,setPosts] =useState([])
    const [loading,setLoading] = useState(false)
    const [hasMore,setHasMore] =useState(true)

    useEffect(() => {
        setLoading(true)
        const data = {
            "username": "stefanljubovic",
            "page" : pageNumber
        }
        UserService.feed(data)
            .then(res=>{
                setHasMore(res.data.lastPage !== pageNumber)
                setPosts(prevPosts => {
                    return [...new Set([...prevPosts, ...res.data.posts.map(post=> post)])]
                  })
                  setLoading(false)
                  console.log(res.data)
            })
      }, [pageNumber])

    return(
        <div className={classes.containerWrap}>
        <InfiniteScroll
        loader={<h4>Loading...</h4>}
        dataLength={posts.length}
        next={()=>setPageNumber(prevPageNumber => prevPageNumber + 1)} 
        hasMore={hasMore}>
            {   
                posts.map((post,i) => 
                        <Post key={i} post={post}/>
                )}
        </InfiniteScroll>
        </div>
    )
}

export default Posts;