import graphene
from resources import database

class Hugo(graphene.ObjectType):

    pass
class Post(graphene.ObjectType):

    pass
class Stats(graphene.ObjectType)

    pass
class User(graphene.ObjectType):
    userName = graphene.String()
    userId = graphene.String()
    password = graphne.String()
    icon = graphene.String()

    pass