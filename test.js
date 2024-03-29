const resolvers = {
    Mutation: {
        // toggleCartHidden(_root, _args, _context, _info) 
        toggleCartHidden: (_root, _args, {cache}) => {
            const {cartHidden} = cache.readQuery({
                query: GET_CART_HIDDEN,
            })
            cache.writeQuery({
                query: GET_CART_HIDDEN, 
                data: {cartHidden: !cartHidden}
            })
        }
    }
}

console.log(resolvers.Mutation.toggleCartHidden); 

