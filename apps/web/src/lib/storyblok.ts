import BlogPost from "@/components/storyblok/BlogPost";
import Author from "@/components/storyblok/Author";
import { storyblokInit, apiPlugin } from "@storyblok/react";

export function initStoryblok() {
  storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      region: "eu",
    },
    components: {
      blogPost: BlogPost,
      author: Author,
    },
  });
}
