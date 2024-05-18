import axios from 'axios';
import { useState, useEffect } from 'react';

type Posts = {
    id: string,
    title: string,
    messagem: string
}

const GetPosts = () => {
    const [posts, setPosts] = useState<Posts[]>([])

    const fetchPosts = async () => {
        const response = await axios.get("https://6647ca722bb946cf2f9ee11c.mockapi.io/posts")
        setPosts(response.data);
        console.log(response.data)
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return ( 
        <div>
            <h1>Página GetPosts</h1>
            {posts.map(item => (
                <h3 key={item.id}>{item.title}</h3>
            ))}
        </div>
     );
}
 
export default GetPosts;