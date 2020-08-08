from starlette.responses import JSONResponse, FileResponse
from bson.json_util import dumps
from json import loads
import resources
import settings
import os

async def home(request):
    file = os.path.join(settings.STATIC_ROOT, 'build/index.html')
    return FileResponse(file)