from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route, Mount
from starlette.middleware import Middleware
from starlette.graphql import GraphQLApp
from starlette.staticfiles import StaticFiles

from bson.json_util import dumps
from json import loads
import os
import uvicorn

import resources
import settings
import routes

middleware = [

]

routes = [
    Route('/gethugos', routes.test_page),
    Route('/home', routes.home), 
    Route('/login', routes.login),
    Mount('/static', StaticFiles(directory=os.path.join(settings.STATIC_ROOT, 'frontend/build')))
]

startup = [
    resources.initialize_db
]

app = Starlette(debug=True, routes=routes, on_startup=startup, middleware=middleware)

if __name__ == '__main__':
    uvicorn.run('app:app', host='0.0.0.0', port=8000, reload=True)