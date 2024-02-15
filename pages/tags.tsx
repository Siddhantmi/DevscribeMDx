// pages>tags.tsx

import type { NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";

interface TagsProps {
  tags: string[];
}

const Tags: NextPage<TagsProps> = ({ tags }) => {
  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-4xl font-bold mb-4">All Tags</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tags.map((tag) => (
          <Link key={tag} href={`/posts/tagged/${encodeURIComponent(tag)}`} legacyBehavior>
            <a className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              {tag}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const mdxFiles = getAllMdx();
  const allTags = Array.from(
    new Set(mdxFiles.flatMap((file) => file.frontMatter.tags || []))
  );

  return {
    props: {
      tags: allTags,
    },
  };
};

export default Tags;
