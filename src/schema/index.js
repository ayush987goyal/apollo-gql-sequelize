import { gql } from 'apollo-server-express';

import userSchema from './user';
import messageSchema from './message';

const linksSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linksSchema, userSchema, messageSchema];
