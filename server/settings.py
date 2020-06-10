from starlette.config import Config

config = Config('.env')

DATABASE_URL = config('DATABASE_URL')
STATIC_ROOT = config('STATIC_ROOT')