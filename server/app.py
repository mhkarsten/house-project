from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route
from starlette.middleware import Middleware
import uvicorn
import asyncio
from bson.json_util import loads, dumps

from resources import database
from middleware.middleware import DatabaseMiddleware
from resources import database

async def test_page(request):
    query = database.HUGO.find()
    results = []
    for doc in await query.to_list(length=100):
        results.append(doc)
    return JSONResponse(loads(dumps(results)))

middleware = [
  Middleware(DatabaseMiddleware)
]

routes = [
    Route('/', test_page),
]

app = Starlette(debug=True, routes=routes, middleware=middleware)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    uvicorn.run(app, host='0.0.0.0', port=8000, loop=loop)