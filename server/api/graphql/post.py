from bson.json_util import dumps
from json import loads

import graphene
import resources

class Post(graphene.ObjectType):
    title = graphene.String()
    userId = graphene.String()
    time = graphene.types.datetime.DateTime()
    body = graphene.String()

    def resolve_title(parent, info):
        pass
    def resolve_userId(parent, info):
        pass
    def resolve_time(parent, info):
        pass
    def resolve_body(parent, info):
        pass
    pass

class PostMutation(graphene.Mutation):
    def mutate(root, info):
        pass

class PostQuery(graphene.ObjectType):
    def resolve(parent, info):
        pass