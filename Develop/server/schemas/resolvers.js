//This is the actual thing that grabs the properties of the User and Book
const {User, Book} = require('../models');
//It's SPECIFICALLY "AuthenticationError" because this line of string authenticates with the required data source
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');


const resolvers = {

    Query: {
    //This has NOTHING to do wtih the typedefs.  Look above.  There's nothing indicating it.  This is its definition.  What this is doing is creating a LINK to the typeDefs.  So when this is passed on, it'll have these properties.  Since typeDefs is also being read, it'll make the connection there.  It is established in the index.js

        //Pay close attention to this:  "me" is fround in the GraphQL, but we're not doing anything with it here just yet.  We're just making properties to have a CONNECTION
        me: async (parent, args, context) => {
            //If this is a user that's logged in
            if(context.user) {
                //This here is an excellent example.  The "User" is being used NOT FROM THE GRAPHQL, but the "models" folder
                const UserData = await User.findone({})
                .select('__v -password')
                .populate('books')
    
                return UserData;
            }
    
            throw new AuthenticationError('Not Logged In')
        }
    },
      
    

    //Mutation has login, addUser, saveBook, removeBook
    Mutation: {
        addUser: async(parent, args) => {
            //This is using the Schema from the User.js
            const user = await User.create(args);
            //This is from the /utils/auth, but the information is received from "User"
            const token = signToken(user);
            //return BOTH arguments
            return {token, user};
        },
        //On the login, we need both the email AND password
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if (!user)
            {
                //You don't want to notify which is incorrect, but you want to let them know at least there's an error going on.  Use this for both user AND password
                throw new AuthenticationError('INCORRECT CREDENTIALS')
            }

            //This is from the userSchema.methods.isCorrectPassword from User.js
            const correctPW = await user.isCorrectPassword(password);

            if (!correctPW)
            {
                throw new AuthenticationError('INCORRECT CREDENTIALS')
            }

            //From auth.js, we're trying to have them do the username/email and returns an id
            const token = signToken(user);
            //Since we are logging in, we need both the token AND user information.  Return these values
            return {token, user};

        },
        //Under saveBook, we need ALL the information.  Therefore, this is different than the "login"
        saveBook: async (parent, {args}, context) => {
            //Check to see if the user is logged in.  If it is:
            if (context.user) {
                //make a new const and find the User by ID first and then UPDATE the information
                const updatedUser = await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    { $addToSet: {savedBooks: args.input }},
                    { new: true }
                );
            return updatedUser;

            }
            //If you aren't logged in, you need to be:
            throw new AuthenticationError('MUST BE LOGGED IN');

        },
        //removeBook(bookId: ID!): User
        removeBook: async (parent, args, context) => {
            if (context.user) {
                //make a new const and find the User by ID first and then UPDATE the information
                const updatedUser = await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    { $$pull: {savedBooks: {bookId: args.bookId} }},
                    { new: true }
                );
            return updatedUser;

            }
            //If you aren't logged in, you need to be:
            throw new AuthenticationError('MUST BE LOGGED IN');
        }
    }


};

module.exports = resolvers;