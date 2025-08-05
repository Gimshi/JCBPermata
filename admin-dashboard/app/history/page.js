import ReactMarkdown from "react-markdown";

const blogs = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title" },
  { key: "slug", label: "Slug" },
  { key: "content", label: "Content" },
  { key: "date", label: "Creation Date" },
  { key: "publisher", label: "Publisher" },
];

const blog_content_mock = [
  {
    id: "1",
    title: "First Blog Post",
    slug: "first-blog-post",
    content: `# Welcome to the First Blog Post\nThis is the **content** of the first blog post.\n\n- Feature 1\n- Feature 2\n\n[Learn more](https://example.com)`,
    date: "2025-08-01",
    publisher: "Alice",
  },
  {
    id: "2",
    title: "Second Blog Post",
    slug: "second-blog-post",
    content: `## Second Blog Post\nHere is some _italic text_ and a code snippet:\n\n\`console.log('Hello, world!');\`\n\n> This is a blockquote.`,
    date: "2025-08-02",
    publisher: "Bob",
  },
  {
    id: "3",
    title: "Third Blog Post",
    slug: "third-blog-post",
    content: `### Third Blog Post\nA numbered list:\n\n1. First\n2. Second\n3. Third\n\n---\n\n**Thanks for reading!**`,
    date: "2025-08-03",
    publisher: "Charlie",
  },
];

export default function History() {
  return (
    <div className="page-center">
      <div className="text-3xl mb-4">Blog History</div>
      <div className="flex flex-col gap-4">
        {blog_content_mock.map((post) => (
          <div key={post.id} className="border rounded-lg p-4 bg-white">
            <div className="font-bold text-xl mb-1">{post.title}</div>
            <div className="text-gray-500 text-sm mb-2">
              By {post.publisher} on {post.date}
            </div>
            <div className="mb-2 text-gray-700 prose prose-sm max-w-none">
              <ReactMarkdown>
                {post.content.length > 400 ? post.content.slice(0, 400) + "..." : post.content}
              </ReactMarkdown>
            </div>
            <div className="text-xs text-blue-600">/{post.slug}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
