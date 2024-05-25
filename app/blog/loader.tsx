import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function loader() {
    const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map(filename => {
        const filePath = path.join(postsDirectory, filename);
        console.log(filePath);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);


        return {
            data,
            content,
            filename,
        };
    });

    return {
        posts,
    };
}

