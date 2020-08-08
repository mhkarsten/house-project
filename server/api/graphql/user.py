from bson.json_util import dumps
from bson.objectid import ObjectId
from json import loads

import graphene
import resources

class User(graphene.ObjectType):
    name = graphene.String()
    _id = graphene.String()
    password = graphene.String()
    icon = graphene.String()

    def resolve_name(parent, info):
        return parent['user_name']

    def resolve__id(parent, info):
        return parent['_id']['$oid']

    def resolve_password(parent, info):
        return parent['password']

    def resolve_icon(parent, info):
        return parent['icon']

class UserInput(graphene.InputObjectType):
    userName = graphene.String(required=True)
    password = graphene.String(required=True)
    icon = graphene.String(required=True)

class CreateUser(graphene.Mutation):
    user = graphene.Field(User)

    class Arguments:
        user_data = UserInput(required=True)

    async def mutate(root, info, user_data=None):
        newUser = {
            'user_name': user_data.userName,
            'password': user_data.password,
            'icon': user_data.icon
        }

        result = await resources.database.users.insert_one(newUser)
        user = await resources.database.users.find_one({'_id': result.inserted_id})
        
        return CreateUser(user=loads(dumps(user)))

class UserQuery(graphene.ObjectType):
    user = graphene.Field(User, userName=graphene.String(), oid=graphene.String())
    users = graphene.List(User, length=graphene.Int())

    async def resolve_user(parent, info, userName=0, oid=0):

        if (isinstance(userName, str) and oid == 0):
            val = await resources.database.users.find_one({'user_name': userName})

        elif (isinstance(oid, str) and userName == 0):
            val = await resources.database.users.find_one({'_id': ObjectId(oid)})

        elif (isinstance(oid, str) and isinstance(userName, str)):
            val = await resources.database.users.find_one({'user_name': userName, '_id': ObjectId(oid)})
        
        return loads(dumps(val))
    
    async def resolve_users(parent, info, length):
        val = await resources.database.users.find().to_list(length=length)
        return loads(dumps(val))

class UserMutation(graphene.ObjectType):
    create_user = CreateUser.Field()

    