import motor.motor_asyncio
import ssl
import settings

database = None

async def initialize_db():
    global database
    client = motor.motor_asyncio.AsyncIOMotorClient(settings.DATABASE_URL, ssl_cert_reqs=ssl.CERT_NONE)
    database = client['house']