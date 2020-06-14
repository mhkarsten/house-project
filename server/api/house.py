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
    pass

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

class User(graphene.ObjectType):
    userName = graphene.String()
    userId = graphene.String()
    password = graphene.String()
    icon = graphene.String()

    def resolve_userName(parent, info):
        return parent['user_name']

    def resolve_userId(parent, info):
        return parent['_id']

    def resolve_userPassword(parent, info):
        return parent['password']

    def resolve_userIcon(parent, info):
        return parent['icon']
    

class Query(graphene.ObjectType):
    user = graphene.Field(User)
    hugo = graphene.Field(Hugo)
    stat = graphene.Field(Stat)
    post = graphene.Field(Post)

    async def resolve_user(parent, info):
        val = await resources.database.users.find_one({'user_name': 'sentime'})
        return loads(dumps(val))
    
    async def reolve_hugo(parent, info):
        val = await resources.database.HUGO.find({'user_name': 'sentime'}).to_list(length=1)
        return loads(dumps(val))[0]
    
    async def resolve_stat(parent, info):
        val = await resources.database.stats.find({'user_name': 'sentime'}).to_list(length=1)
        return loads(dumps(val))[0]

    async def resolve_post(parent, info):
        val = await resources.database.posts.find({'user_name': 'sentime'}).to_list(length=1)
        return loads(dumps(val))[0]
