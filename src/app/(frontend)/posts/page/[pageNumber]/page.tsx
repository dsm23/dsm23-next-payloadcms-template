import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { CollectionArchive } from "~/components/CollectionArchive";
import { PageRange } from "~/components/PageRange";
import { Pagination } from "~/components/Pagination";
import PageClient from "./page.client";

export const revalidate = 600;

type Args = {
  params: Promise<{
    pageNumber: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise;
  const payload = await getPayloadHMR({ config: configPromise });

  const sanitizedPageNumber = Number(pageNumber);

  if (!Number.isInteger(sanitizedPageNumber)) notFound();

  const posts = await payload.find({
    collection: "posts",
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
    overrideAccess: false,
  });

  return (
    <div className="pb-24 pt-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose max-w-none dark:prose-invert">
          <h1>Posts</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive posts={posts.docs} />

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise;
  return {
    title: `Payload Website Template Posts Page ${pageNumber || ""}`,
  };
}

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise });
  const posts = await payload.find({
    collection: "posts",
    depth: 0,
    limit: 10,
    draft: false,
    overrideAccess: false,
  });

  const pages: { pageNumber: string }[] = [];

  for (let i = 1; i <= posts.totalPages; i++) {
    pages.push({ pageNumber: String(i) });
  }

  return pages;
}
