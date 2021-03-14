import React from 'react'
import './Content.scss'
import Register from '../../login/Register'
import PostRegister from '../../login/PostRegister'
const { useState } = React

const Content = () => {

    const [page, setPage] = useState('register')

    function handlePageChange() {
        setPage('post')
        console.log("Page Changed! ", page)
    }

    return (
        <div>
            {page === 'register' ? <Register onPageChange={handlePageChange} /> : <PostRegister />}
        </div>
    )
}

export default Content;
