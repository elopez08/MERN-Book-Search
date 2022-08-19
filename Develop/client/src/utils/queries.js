import gql from 'graphql-tag';

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bokkCount
        savedBooks {
            _id
            bookId
            authors
            description
            title
            image
            link
        }
    }
}

`;