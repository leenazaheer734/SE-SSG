import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPostData() 
{

  const filePath = path.join(process.cwd(), 'posts', 'hello-world.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the frontmatter using gray-matter
  const { data } = matter(fileContents);

  return {
    title: data.title,
    date: data.date,
  };
}