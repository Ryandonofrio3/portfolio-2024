
import Link from 'next/link';
import {loader} from './loader';


export default async function Blog() {
    const { posts } = await loader();

return (
    <div>
        <h1 className="text-3xl font-bold text-center text-white mt-24">Blog</h1>
        <div className="absolute top-12 left-0 m-4">
            <Link href="/">
                <button className="outlint-white border-2 text-white px-4 py-2 rounded">Go Home</button>
            </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-12">
            {posts.map((post, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <Link href={`/blog/${post.filename.replace(/\.md$/, '')}`}>
                        <div className="block p-6 h-full flex flex-col justify-between">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.data.title}</h2>
                            <p className="text-gray-500 text-sm mb-4">{post.data.date}</p>
                            <p className="text-gray-700 text-base flex-1">{post.content.substring(0, 200)}...</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>

    </div>
);
}
