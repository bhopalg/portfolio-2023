import { Card } from "@/components/card";
import { SimpleLayout } from "@/components/simple-layout";
import { formatDate } from "@/lib/format-date";
import { getAllPosts } from "@/lib/get-all-posts";
import { Article as ArticleModel } from "@/models/article.model";
import Head from "next/head";

function Article({ article }: { article: ArticleModel }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} className="md:hidden" decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow as="time" dateTime={article.date} className="mt-1 hidden md:block">
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

const DESCRIPTION =
  "All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.";
const TITLE = "Writing on software design and company building.";
const KEYWORDS = [
  "Blog page",
  "List of blogs",
  "Archived blogs",
  "Blog directory",
  "All blogs",
  "Blog collection",
  "Blog index",
  "Blog library",
  "Blog archive",
  "Blog repository",
];

export default function ArticlesIndex({ articles }: { articles: ArticleModel[] }) {
  return (
    <>
      <Head>
        <title>Articles - Spencer Sharp</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS.join(", ")} />
      </Head>
      <SimpleLayout title={TITLE} intro={DESCRIPTION}>
        <div className="md:border-l md:pl-6 md:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllPosts()).map(({ component, ...meta }) => meta),
    },
  };
}
