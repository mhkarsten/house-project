from starlette.responses import JSONResponse, FileResponse
from bson.json_util import dumps
from json import loads
import resources
import settings
import os

async def test_page(request):
    results = []
    for doc in await resources.database.HUGO.find().to_list(length=100):
        results.append(loads(dumps(doc)))
    return JSONResponse(results)

async def login(request):
    file = os.path.join(settings.STATIC_ROOT, 'login/build/index.html')
    os.chdir(file)
    print(os.listdir())
    return FileResponse(file)

async def home(request):
    file = os.path.join(settings.STATIC_ROOT, 'frontend/build/index.html')
    # os.chdir(file)
    # print(os.listdir())
    return FileResponse(file)