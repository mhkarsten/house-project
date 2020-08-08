from bson.json_util import dumps
from bson.objectid import ObjectId
from json import loads

import graphene
import resources

class Stat(graphene.ObjectType):
    title = graphene.String()
    time = graphene.types.datetime.DateTime()
    value = graphene.Int()
    userId = graphene.String()
    _id = graphene.String()

    def resolve_title(parent, info):
        return parent['title']

    def resolve_userId(parent, info):
        return parent['user_id']

    def resolve_time(parent, info):
        return parent['time']

    def resolve_value(parent, info):
        return parent['value']
    
    def resolve__id(parent, info):
        return parent['_id']['$oid']

class StatInput(graphene.InputObjectType):
    title = graphene.String()
    time = graphene.types.datetime.DateTime()
    value = graphene.Int()
    userId = graphene.String()

class CreateStat(graphene.Mutation):
    stat = graphene.Field(Stat)

    class Arguments:
        stat_data = StatInput(required=True)

    async def mutate(root, info, stat_data=None):
        newStat = {
            'title': stat_data.title,
            'time': stat_data.time,
            'value': stat_data.value,
            'user_id': ObjectId(stat_data.userId)
        }

        result = await resources.database.stats.insert_one(newStat)
        stat = await resources.database.stats.find_one(result.inserted_id)
        
        return CreateStat(stat=loads(dumps(stats)))

class StatQuery(graphene.ObjectType):
    stat = graphene.Field(Stat, statName=graphene.String())
    stats = graphene.List(Stat, length=graphene.Int())

    async def resolve_stat(parent, info, statName):
        val = await resources.database.stats.find_one({'title': statName})
        return loads(dumps(val))

    async def resolve_stats(parent, info, length):
        val = await resources.database.stats.find().to_list(length=length)
        return loads(dumps(val))

class StatMutation(graphene.ObjectType):
    create_stat = CreateStat.Field()