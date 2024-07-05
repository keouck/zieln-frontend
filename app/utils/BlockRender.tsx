import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function BlockRenderClient({
  content,
}: {
  content: BlocksContent;
}) {
  return (
    <BlocksRenderer
      blocks={{
        paragraph: ({ children }) => (
          <p className="text-gray-700">{children}</p>
        ),
        heading: ({ level, children }) => {
          const Heading = `h${level}` as keyof JSX.IntrinsicElements;
          return <Heading className="text-2xl font-bold">{children}</Heading>;
        },
        image: ({ src, alt }: any) => <img src={src} alt={alt} />,
        link: ({ href, children }: any) => (
          <a href={href} className="text-blue-500">
            {children}
          </a>
        ),
        code: ({ language, code }: any) => (
          <pre>
            <code className={`language-${language}`}>{code}</code>
          </pre>
        ),
      }}
      content={content}
    />
  );
}
