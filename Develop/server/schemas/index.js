//We're going to user both files in the Schemas
//Because we're using both the typeDefs AND resolvers here, we can access the information from the other files.  FOr example we have the Mutation from the typeDefs, but in resolvers, despite not being linked on THAT file, we can still use it.  This is the bridge for it
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = {typeDefs, resolvers};