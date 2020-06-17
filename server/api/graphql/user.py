from bson.json_util import dumps
from json import loads

import graphene
import resources

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

class UserMutation(graphene.Mutation):
    def mutate(root, info):
        pass

class UserQuery(graphene.ObjectType):
    user = graphene.Field(User, userName=graphene.String())
    users = graphene.List(User, length=graphene.Int())

    async def resolve_user(parent, info, userName):
        val = await resources.database.users.find_one({'user_name': userName})
        return loads(dumps(val))
    
    async def resolve_users(parent, info, length):
        val = await resources.database.users.find().to_list(length=length)
        return loads(dumps(val))
