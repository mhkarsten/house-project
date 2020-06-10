import settings
import pymongo
import ssl
from motor.motor_asyncio import AsyncIOMotorClient
import asyncio
loop = asyncio.get_event_loop()
client = AsyncIOMotorClient(settings.DATABASE_URL, io_loop=loop)
database = client['house']