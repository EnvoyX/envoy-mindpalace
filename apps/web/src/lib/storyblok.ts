import { storyblokInit, apiPlugin } from "@storyblok/react";

export function initStoryblok() {
  console.log(process.env.STORYBLOK_TOKEN);
  storyblokInit({
    accessToken: process.env.STORYBLOK_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      region: "eu",
    },
  });
}
