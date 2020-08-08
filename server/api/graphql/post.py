from bson.json_util import dumps
from bson.objectid import ObjectId
from json import loads

import graphene
import resources

class Post(graphene.ObjectType):
    title = graphene.String()
    userId = graphene.String()
    time = graphene.types.datetime.DateTime()
    body = graphene.String()
    _id = graphene.String()

    def resolve_title(parent, info):
        return parent['title']

    def resolve_userId(parent, info):
        return parent['user_id']

    def resolve_time(parent, info):
        return parent['time']

    def resolve_body(parent, info):
        return parent['body']

    def resolve__id(parent, info):
        print(parent)
        return parent['_id']['$oid']

class PostInput(graphene.InputObjectType):
    title = graphene.String()
    userId = graphene.String()
    time = graphene.types.datetime.DateTime()
    body = graphene.String()

class CreatePost(graphene.Mutation):
    post = graphene.Field(Post)

    class Arguments:
        post_data = PostInput(required=True)

    async def mutate(root, info, post_data=None):
        newPost = {
            'title': post_data.title,
            'time': post_data.time,
            'user_id': ObjectId(post_data.userId),
            'body': post_data.body
        }

        result = await resources.database.posts.insert_one(newPost)
        post = await resources.database.posts.find_one({'_id': result.inserted_id})

        return CreatePost(post=loads(dumps(post)))

class PostQuery(graphene.ObjectType):
    post = graphene.Field(Post, postName=graphene.String())
    posts = graphene.List(Post, length=graphene.Int())

    async def resolve_post(parent, info, postName):
        val = await resources.database.posts.find_one({'title': postName})
        return loads(dumps(val))

    async def resolve_posts(parent, info, length):
        val = await resources.database.posts.find().to_list(length=length)
        return loads(dumps(val))

class PostMutation(graphene.ObjectType):
    create_post = CreatePost.Field()