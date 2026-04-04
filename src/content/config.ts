import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date().optional(), // Jekyll usually has date in filename, but often in frontmatter as well
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		author: z.string().optional(),
		layout: z.string().optional(),
	}),
});

export const collections = {
	'blog': blog,
};
