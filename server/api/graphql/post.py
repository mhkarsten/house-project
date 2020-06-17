from bson.json_util import dumps
from json import loads

import graphene
import resources

class Post(graphene.ObjectType):
    title = graphene.String()
    userId = graphene.String()
    time = graphene.types.datetime.DateTime()
    body = graphene.String()

    def resolve_title(parent, info):
        return parent['title']

    def resolve_userId(parent, info):
        return parent['user_id']

    def resolve_time(parent, info):
        return parent['time']

    def resolve_body(parent, info):
        return parent['body']

class PostMutation(graphene.Mutation):
    def mutate(root, info):
        pass

class PostQuery(graphene.ObjectType):
    post = graphene.Field(Post, postName=graphene.String())
    posts = graphene.List(Post, length=graphene.Int())

    async def resolve_post(parent, info):
        val = await resources.database.posts.find_one({'title': postName})
        return loads(dumps(val))

    async def resolve_posts(parent, info):
        val = await resources.database.posts.find().to_list(length=length)
        return loads(dumps(val))