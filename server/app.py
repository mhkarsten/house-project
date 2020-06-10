from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route
from starlette.middleware import Middleware
from starlette.graphql import GraphQLApp

from bson.json_util import dumps
from json import loads

import uvicorn

import resources
import settings
import routes

middleware = [

]

routes = [
    Route('/gethugos', routes.test_page),
]

startup = [
    resources.initialize_db
]

app = Starlette(debug=True, routes=routes, on_startup=startup, middleware=middleware)

if __name__ == '__main__':
    uvicorn.run('app:app', host='0.0.0.0', port=8000, reload=True)