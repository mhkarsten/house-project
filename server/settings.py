from starlette.config import Config


config = Config('.env')

DATABASE_URL = config("DATABASE_URL", cast=str, default='mongodb+srv://dbAdmin:!sC9q^8eYi@house-project-9g5fo.gcp.mongodb.net/house?retryWrites=true&w=majority')