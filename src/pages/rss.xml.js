import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: "Todd Carney's Blog",
		description: "Personal Blog of Todd Carney",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
      content: post.body,
		})),
	});
}
