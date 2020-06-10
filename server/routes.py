from starlette.responses import JSONResponse
from bson.json_util import dumps
from json import loads
import resources
import settings

async def test_page(request):
    results = []
    for doc in await resources.database.HUGO.find().to_list(length=100):
        results.append(loads(dumps(doc)))
    return JSONResponse(results)