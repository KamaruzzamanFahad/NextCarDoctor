import GetData from '@/Components/getData';
import Link from 'next/link';
import React from 'react';

// const getpost = async () => {
//     const res = (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
//     return res;
// }
const Page = async () => {
    const allpost = await GetData('https://jsonplaceholder.typicode.com/posts');
    console.log(allpost)
    return (
        <div className='grid grid-cols-3'>
            hello post page
            {
                allpost.map(({ title, body, id }, i) => (
                    <div key={i} className='border-2 gap-5 p-5 m-5'>
                        <h2 className='font-bold'>{title}</h2>
                        <p>{body}</p>
                        <Link href={`/post/${id}`}><button>Detils</button></Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Page;
