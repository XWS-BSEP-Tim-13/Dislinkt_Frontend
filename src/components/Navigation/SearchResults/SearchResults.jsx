import React, { useEffect } from 'react'
import classes from './SearchResults.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
const SearchResults = (props) => {

    const [searchUsers,setSearchUsers] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        console.log(props.users)
        setSearchUsers(props.users)
    })

    function changeRoute (username) {
        navigate("/in/"+username);
    }

  return (
    <div  id={classes.app} onClick={() => props.changeState()}>
        <div className={classes.modalOverlay} >
            <div className={classes.searchDiv}>
                {
                    searchUsers.length ==0 ? (
                        <div className={classes.noResults}>No results</div>
                    ) : (
                        <div>
                            {
                             props.users.map((user,i) => 
                                <div onClick={()=> changeRoute(user.username)}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.searchIcon} />
                                    {user.firstName} {user.lastName}
                                </div>
                            )}
                        </div>
                    )
                }
                </div>
            </div>
    </div>
  )
}

export default SearchResults