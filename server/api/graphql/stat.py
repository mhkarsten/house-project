from bson.json_util import dumps
from json import loads

import graphene
import resources

class Stat(graphene.ObjectType):
    title = graphene.String()
    useId = graphene.String()
    time = graphene.types.datetime.DateTime()
    value = graphene.Int()

    def resolve_title(parent, info):
        return
    def resolve_userId(parent, info):
        return
    def resolve_time(parent, info):
        return
    def resolve_value(parent, info):
        return
        
class StatMutation(graphene.Mutation):
    def mutate(root, info):
        pass
    pass

class StatQuery(graphene.ObjectType):
    def resolve(parent, info):
        pass

