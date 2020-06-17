from bson.json_util import dumps
from json import loads

import graphene
import resources


class Event(graphene.ObjectType):
    start = graphene.Int()
    end = graphene.Int()
    overflow = graphene.Int()

    def resolve_start(parent, info):
        return parent['start']

    def resolve_end(parent, info):
        return parent['end']

    def resolve_overflow(parent, info):
        return parent['overflow']

class Hugo(graphene.ObjectType):
    h_id = graphene.String()
    userId = graphene.String()
    time = graphene.String()
    events = graphene.List(Event)

    def resolve_id():
        return parent['_id']

    def resolve_userId(parent, info):
        return parent['user_id']

    def resolve_time(parent, info):
        pass parent['time']

    def resolve_events(parent, info):
        return parent['events']

class HugoMutation(graphene.Mutation):
    def mutate(root, info):
        pass

class HugoQuery(graphene.ObjectType):
    hugo = graphene.Field(Hugo, time=graphene.Date())
    hugos = graphene.List(Hugo, length=graphene.Int())

    async def resolve_hugo(parent, info):
        val = await resources.database.HUGO.find_one({'time': time})
        return loads(dumps(val))

    async def resolve_hugos(parent, info):
        val = await resources.database.HUGO.find().to_list(length=length)
        return loads(dumps(val))