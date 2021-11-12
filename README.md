## How I build it

First, setup a next-app starter:

```bash
npx create-next-app@latest
```
Second, follow [this issue](https://github.com/vercel/next.js/pull/30082) to build a GraphQL server using `api-routes-graphql` [example](https://github.com/vercel/next.js/pull/30082/commits/9a29c4cc66cb754c84d6356d8ce211241bf21ccc#diff-d942064cd8729155bb0558732e6bcc581200b9be4e535ae36411b6cd7ca3cc41)

Third, follow [this blog](https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/) to build the GraphQL client.

## Result

I've built both SSG and SSR below the pages folder. Both of them works well in development mode. You can check out them after running `npm run dev`. It will show a text "Nextjs" recieve from GraphQL server.

- SSR: http://localhost:3000/ssr
- SSG: http://localhost:3000/ssg

## Question

However, when I run `npm run build`, it failed. 

```bash
Error occurred prerendering page "/ssg". Read more: https://nextjs.org/docs/messages/prerender-error
Error: request to http://localhost:3000/api/graphql failed, reason: connect ECONNREFUSED 127.0.0.1:3000
```

Seems that the error comes from SSG so I remove it and then all applications are sucessfully built if SSG is excluded. Question: Is there any part that I understand wrong? How should I modify the code to support SSG GraphQL in next?

Note: I also submit the `.env` file directly just in case if someone needs it for debugging.

