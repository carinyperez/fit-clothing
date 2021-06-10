import {gql} from 'apollo-boost'; 
import { addItemToCart } from './cart.utils';

export const typeDefs = gql`
    extend type Item { 
        quantity: Int 
    }
    extend type Mutation {
        ToggleCartHidden: Boolean!
        AddItemToCart(item: Item!): [Item]!
    }
`
const GET_CART_HIDDEN = gql `{
    cartHidden @client 
}`

const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`

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
        }, 
        // add item to cart mutation 
        // AddItemToCart(item: Item!): [Item]!
        addItemToCart: (_root, {item}, {cache}) => {
            // get existing cart items 
            const {cartItems} = cache.readQuery({
                query: GET_CART_ITEMS
            })
            // add new items plus existing items  
            const newCartItems = addItemToCart(cartItems, item); 
            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: {cartItems: newCartItems}
            })
            return newCartItems; 
        }
    }
}