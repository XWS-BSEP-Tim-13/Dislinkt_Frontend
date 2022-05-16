import classes from './Posts.module.css';
import React, { useState, useRef, useCallback,useEffect} from 'react'
import Post from '../Post/Post';
import usePostsSearch from './usePostsSearch'
function Posts(){
    const [pageNumber, setPageNumber] = useState(1)
    const {
        posts,
        hasMore,
        loading,
        error
      } = usePostsSearch(pageNumber)

      const observer = useRef()
      const lastPostElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber(prevPageNumber => prevPageNumber + 1)
          }
        })
        if (node) observer.current.observe(node)
      }, [loading, hasMore])

    
    


    return(
        <div className={classes.containerWrap}>
            {
                posts.map((posts,i) => {
                    if(posts.lenght === i +1){
                        return <Post ref={lastPostElementRef}  key={i}/>
                    }else{
                        return <Post key={i}/>
                    }
                })}
                <div>{loading && 'Loading...'}</div>
                <div>{error && 'Error'}</div>
        </div>
    )
}

export default Posts;