import {gql} from 'apollo-boost'; 

export const typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean!
    }
`


const GET_CART_HIDDEN = gql `{
    cartHidden @client 
}`

// writing data to graphql server 
export const resolvers = {
    Mutation: {
        // toggleCartHidden(_root, _args, _context, _info) 
        // function that reads and writes queries
        // toggleCartHidden resolver 
        toggleCartHidden: (_root, _args, {cache}) => {
            const {cartHidden} = cache.readQuery({
                query: GET_CART_HIDDEN,
            })
            cache.writeQuery({
                query: GET_CART_HIDDEN, 
                data: {cartHidden: !cartHidden}
            })
            return !cartHidden
        }
    }
}