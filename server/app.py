from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route, Mount
from starlette.middleware import Middleware
from starlette.graphql import GraphQLApp
from starlette.staticfiles import StaticFiles
from graphql.execution.executors.asyncio import AsyncioExecutor

from bson.json_util import dumps
from json import loads
import os
import uvicorn
import graphene

from api.graphql.api import schema
import resources
import settings
import routes

startup = [
    resources.initialize_db
]

middleware = [

]

routes = [
    Route('/api/house', GraphQLApp(schema = schema, executor_class = AsyncioExecutor)),

    Route('/app', routes.home), 
    Mount('/static', StaticFiles(directory=os.path.join(settings.STATIC_ROOT, 'build/static/')))
]



app = Starlette(debug=True, routes=routes, on_startup=startup, middleware=middleware)

if __name__ == '__main__':
    uvicorn.run('app:app', host='0.0.0.0', port=8000, reload=True)