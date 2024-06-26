import React from 'react';

const getpost = async () => {
    const res = (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
    return res;
}
const Page = async () => {
    const allpost = await getpost();
    console.log(allpost)
    return (
        <div className='grid grid-cols-3'>
            hello post page
            {
                allpost.map(({ title, body }, i) => (
                    <div key={i} className='border-2 gap-5 p-5 m-5'>
                        <h2 className='font-bold'>{title}</h2>
                        <p>{body}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Page;
