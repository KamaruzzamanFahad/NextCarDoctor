import GetData from '@/Components/getData';
import React from 'react';

const Page = async ({ params }) => {
    const detilst = await GetData(`https://jsonplaceholder.typicode.com/posts/${parseInt(params.id)}`)
    return (
        < div >
            <h1>{detilst.title}</h1>
        </div >
    );
}

export default Page;
