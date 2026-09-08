import { getStoryblokApi } from '@storyblok/react';
import { createServerFn } from '@tanstack/react-start';
import * as z from 'zod';

export const fetchStory = createServerFn({ method: 'GET' })
  .validator(
    z.object({
      slug: z.string(),
    }),
  )
  .handler(async ({ data }) => {
    const storyblokApi = getStoryblokApi();

    // In dev mode, fetch draft version for real-time visual editing
    const version = process.env.NODE_ENV === 'development' ? 'draft' : 'published';

    try {
      const response = await storyblokApi.get(`cdn/stories/${data.slug}`, {
        version,
      });
      return response.data.story;
    } catch (error) {
      throw new Error(`Storyblok fetch error: ${error}`);
    }
  });
