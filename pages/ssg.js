import { gql, ApolloClient, InMemoryCache } from '@apollo/client'

const SSG = ({ items }) => {
  return (
      <div>{items[0].name}</div>
  )
}

const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_URL}/api/graphql`,
    cache: new InMemoryCache(),
})

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Users {
        users {
            name
        }
      }
    `,
  })
  const items = data.users
  return { props: { items } }
}

export default SSG
