from bson.json_util import dumps
from json import loads

import graphene
import resources


class Event(graphene.ObjectType):
    start = graphene.Int()
    end = graphene.Int()
    overflow = graphene.Int()

    def resolve_start(parent, info):
        pass
    def resolve_end(parent, info):
        pass
    def resolve_overflow(parent, info):
        pass

class Hugo(graphene.ObjectType):
    h_id = graphene.String()
    userId = graphene.String()
    time = graphene.String()
    events = graphene.List(Event)

    def h_id():
        pass
    def resolve_userId(parent, info):
        pass
    def resolve_time(parent, info):
        pass
    def resolve_events(parent, info):
        pass

class HugoMutation(graphene.Mutation):
    def mutate(root, info):
        pass

class HugoQuery(graphene.ObjectType):
    def resolve(parent, info):
        pass