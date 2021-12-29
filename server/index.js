const express = require("express");
const accData = require("./jsonData");
const app = express();
const PORT = 6969;
const graphql = require("graphql");
const {graphqlHTTP} = require("express-graphql");
//const { type } = require("os");
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = graphql;
const cors = require("cors");

app.use(cors());
const accountType = new GraphQLObjectType({
    name: "account",
    fields: () => ({
        id: { type: GraphQLInt},
        accNo: { type: GraphQLString},
        accName: { type: GraphQLString},
        accType: { type: GraphQLString},
        balance: { type: GraphQLInt},
        currency: { type: GraphQLString},
    })
});
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createAccount: {
        type: accountType,
        args: {
            accNo: { type: GraphQLString },
            accName: { type: GraphQLString },
            accType: { type: GraphQLString },
            balance: { type: GraphQLInt },
            currency: { type: GraphQLString },
        },
        resolve(parent, args) {
            accData.push({
            id: accData.length + 1,
            accNo: args.accNo,
            accName: args.accName,
            accType: args.accType,
            balance: args.balance,
            currency: args.currency
          });
          return args;
        },
      },
    },
  });

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllAccounts: {
            type: new GraphQLList(accountType),
            args: { id : {type: GraphQLInt}},
            resolve(parent, args) {
                return accData;
            }
        }
    }
});

const schema = new GraphQLSchema({query: RootQuery, mutation: Mutation});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(PORT, ()=>{
    console.log("server running");
})