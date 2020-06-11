from starlette.middleware import Middleware
from starlette.middleware.base import BaseHTTPMiddleware
import settings
import pymongo
import ssl

class DatabaseMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
      client = pymongo.MongoClient(settings.DATABASE_URL, ssl_cert_reqs=ssl.CERT_NONE)
      db = client["house"]
      request.state.db = db
      response = await call_next(request)
      return response

 