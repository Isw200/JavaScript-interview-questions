import React from 'react'
import useFetch from '../customHook/useFetch'

const Posts = () => {
    const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
        <div>
            <h5>Posts</h5>
            {
                loading && <h3>Loading...</h3>
            }
            {
                !loading && data?.map((item) => {
                    return <li key={item.id}>
                        {item.title}
                    </li>
                })
            }
            {
                error && <h1>{error}</h1>
            }
        </div>
    )
}

export default Posts