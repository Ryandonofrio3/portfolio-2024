import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostLayout from '../post-layout';

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => ({
        slug: filename.replace(/\.md$/, ''),
    }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
    console.log("postsDirectory", postsDirectory);
    const filePath = path.join(postsDirectory, `${slug}.md`);
    console.log("filePath", filePath);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    const { data, content } = matter(fileContents);
    console.log("data", data);

    if (!data || !content) {
        notFound();
    }

    return (
        <PostLayout>
            <article className="prose prose-sm mx-auto max-w-3xl text-white">
                <h1>{data.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
        </PostLayout>
    );
}


