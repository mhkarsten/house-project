from api.graphql.hugo import HugoQuery, HugoMutation
from api.graphql.user import UserQuery, UserMutation
from api.graphql.stat import StatQuery, StatMutation
from api.graphql.post import PostQuery, PostMutation

import graphene

class Query(
    HugoQuery,
    UserQuery,
    StatQuery,
    PostQuery
):
    pass

# class Mutation(
#     HugoMutation,
#     UserMutation,
#     StatMutation,
#     PostMutation
# ):
#     pass

schema = graphene.Schema(
    query = Query,
    # mutation = Mutation
)
