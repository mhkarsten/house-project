from bson.json_util import dumps
from bson.objectid import ObjectId
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
    _id = graphene.String()
    userId = graphene.String()
    time = graphene.String()
    events = graphene.List(Event)

    def resolve__id(parent, root):
        return parent['_id']['$oid']

    def resolve_userId(parent, info):
        return parent['user_id']

    def resolve_time(parent, info):
        return parent['time']

    def resolve_events(parent, info):
        return parent['events']

class EventInput(graphene.InputObjectType):
    start = graphene.Int()
    end = graphene.Int()
    overflow = graphene.Int()

class HugoInput(graphene.InputObjectType):
    userId = graphene.String()
    time = graphene.types.datetime.DateTime()
    events = graphene.List(EventInput)

class CreateHugo(graphene.Mutation):
    hugo = graphene.Field(Hugo)

    class Arguments:
        hugo_data = HugoInput(required=True)

    async def mutate(root, info, hugo_data=None):
        newHugo = {
            'time': hugo_data.time,
            'user_id': ObjectId(hugo_data.userId),
            'events': [{'start': event.start, 'end': event.end, 'overflow': event.overflow} for event in hugo_data.events]
        }

        result = await resources.database.HUGO.insert_one(newHugo)
        hugo = await resources.database.HUGO.find_one({'_id': result.inserted_id})
        
        return CreateHugo(hugo=loads(dumps(hugo)))

class HugoQuery(graphene.ObjectType):
    hugo = graphene.Field(Hugo, time=graphene.Date())
    hugos = graphene.List(Hugo, length=graphene.Int())

    async def resolve_hugo(parent, info, time):
        val = await resources.database.HUGO.find_one({'time': time})
        return loads(dumps(val))

    async def resolve_hugos(parent, info, length):
        val = await resources.database.HUGO.find().to_list(length=length)
        return loads(dumps(val))

class HugoMutation(graphene.ObjectType):
    create_hugo = CreateHugo.Field()
