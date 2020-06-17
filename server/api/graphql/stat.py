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
        return parent['title']
    
    def resolve_id(parent, info):
        return parent['_id']

    def resolve_userId(parent, info):
        return parent['user_id']

    def resolve_time(parent, info):
        return parent['time']

    def resolve_value(parent, info):
        return parent['value']
        
class StatMutation(graphene.Mutation):
    def mutate(root, info):
        pass
    pass

class StatQuery(graphene.ObjectType):
    stat = graphene.Field(Stat, statName=graphene.String())
    stats = graphene.List(Stat, length=graphene.Int())

    async def resolve_stat(parent, info):
        val = await resources.database.stats.find_one({'title': statName})
        return loads(dumps(val))

    async def resolve_stats(parent, info):
        val = await resources.database.stats.find().to_list(length=length)
        return loads(dumps(val))

