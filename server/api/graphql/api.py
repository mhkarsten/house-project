from api.graphql.hugo import HugoQuery, HugoMutation
from api.graphql.user import UserQuery, UserMutation
from api.graphql.stat import StatQuery, StatMutation
from api.graphql.post import PostQuery, PostMutation

import graphene

class RootQuery(
    HugoQuery,
    UserQuery,
    StatQuery,
    PostQuery
):
    pass

class RootMutation(
    HugoMutation,
    StatMutation,
    PostMutation,
    UserMutation
):
    pass

schema = graphene.Schema(
    query = RootQuery,
    mutation = RootMutation,
    auto_camelcase=False,
)
