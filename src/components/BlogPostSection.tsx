import { useState } from "react";

export function BlogPostSection({ posts, next, prev }: { posts: any; next: string; prev: string }) {
	const postsPerPage = 2; // Number of posts to show per page
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(posts.length / postsPerPage);
	const handleNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
	};
	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<section className="mx-auto max-w-7xl">
			<div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-12 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
				{currentPosts.map((blogPostEntry, index) => (
					<article
						key={index}
						className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-stone-950 px-8 pb-8 pt-32 sm:pt-64 lg:pt-30">
						<img
							src={`/images/${blogPostEntry.data.image.src}`}
							alt={blogPostEntry.data.image.alt}
							className="absolute inset-0 -z-10 h-full w-full object-cover"
						/>
						<div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
						<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

						<div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							<time dateTime={blogPostEntry.data.publishDate.toDateString()} className="mr-8">
								{blogPostEntry.data.publishDate.toDateString()}
							</time>
							<div className="-ml-4 flex items-center gap-x-4">
								<svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
									<circle cx="1" cy="1" r="1" />
								</svg>
								<div className="flex gap-x-2.5">{blogPostEntry.data.author}</div>
							</div>
						</div>
						<h3 className="mt-3 text-lg font-semibold leading-6 text-white">
							<a href={`${blogPostEntry.slug.replace("en/", "").replace("hu/", "")}`}>
								<span className="absolute inset-0" />
								{blogPostEntry.data.title}
							</a>
						</h3>
						<h4 className="pt-3 text-xs font-medium text-gray-300 uppercase tracking-wider">
							{blogPostEntry.data.category.map((cat) => (
								<a
									key={cat}
									href={`/blog/category/${cat?.toLowerCase()}`}
									className="text-blue-400 dark:text-stone-400 uppercase tracking-wider text-sm font-medium no-underline">
									{cat?.replace(/-/g, " ")}
								</a>
							))}
						</h4>
					</article>
				))}
			</div>
			<div className="mt-8 flex justify-center">
				<div className="flex flex-row mx-auto container justify-center gap-8">
					{currentPage !== 1 && (
						<button onClick={handlePreviousPage} className="flex flex-row align-middle items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12">
								<g transform="rotate(180 6 6)">
									<path
										className="fill-[#50A6F2] dark:fill-white"
										d="M4.7 10c-.2 0-.4-.1-.5-.2c-.3-.3-.3-.8 0-1.1L6.9 6L4.2 3.3c-.3-.3-.3-.8 0-1.1c.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"
									/>
								</g>
							</svg>
							<p className="ml-2 text-[#50A6F2] dark:text-white capitalize">{prev}</p>
						</button>
					)}
					{currentPage !== totalPages && (
						<button onClick={handleNextPage} className="flex flex-row align-middle items-center">
							<span className="mr-2 text-[#50A6F2] dark:text-white capitalize">{next}</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12">
								<path
									className="fill-[#50A6F2] dark:fill-white"
									d="M4.7 10c-.2 0-.4-.1-.5-.2c-.3-.3-.3-.8 0-1.1L6.9 6L4.2 3.3c-.3-.3-.3-.8 0-1.1c.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"
								/>
							</svg>
						</button>
					)}
				</div>
			</div>
		</section>
	);
}
