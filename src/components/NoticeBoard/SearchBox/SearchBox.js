import React, { useState } from 'react'
import styles from './SearchBox.module.css'
import { FaSearch } from 'react-icons/fa'

const SearchBox = ({ filterNotifs }) => {
    const [query, setQuery] = useState('')

    const queryChangeHandler = (e) => {
        setQuery(e.target.value)
        filterNotifs(e.target.value)
    }

    return (
        <div className={styles.container}>
            <FaSearch className={styles.search_icon} />
            <input
                type="text"
                placeholder="Search"
                className={styles.input}
                value={query}
                onChange={queryChangeHandler}
            ></input>
        </div>
    )
}

export default SearchBox
