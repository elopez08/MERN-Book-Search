//Defining GraphQL Schema

const {gql} = require('apollo-server-express');

//Get the whole string to be used in the model.  typeDefs makes a definition on the properties

//Becareful:  don't use "string".  THAT'S AN ERROR.  =>String (S is capatalized)
const typeDefs = gql`
    type Book {
        _id: ID!
        bookId: String
        authors: [String]
        # authors: String
        description: String
        title: String
        image: String
        link: String
    }

    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    input savedBook {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: savedBook!): User
        removeBook(bookId: ID!): User
    }

    type Auth {
        token: ID!
        user: User
    }

`;

//We're defining typeDefs to be passed on
module.exports = typeDefs;

