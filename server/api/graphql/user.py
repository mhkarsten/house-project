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
    user = graphene.Field(User)
    users = graphene.List(User)

    async def resolve_user(parent, info):
        val = await resources.database.users.find_one({'user_name': 'sentime'})
        return loads(dumps(val))
    
    async def reolve_users(parent, info):
        val = await resources.database.users.find().to_list(length=50)
        return loads(dumps(val))
