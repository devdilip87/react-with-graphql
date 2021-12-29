import {gql} from "@apollo/client";

export const LOAD_ACCOUNTS = gql`
    query {
        getAllAccounts {
            id
            accNo
            accName
            accType
            balance
            currency
        }
    }
`;