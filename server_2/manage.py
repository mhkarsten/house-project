from flask import Flask
from flask import request

server = Flask(__name__)

login = False

@server.route('/login')
def login():
    return 'This will be something one day'

@server.route('/app')
def main_page():
    return 'the main page at one point'

if __name__ == 'main':
    server.debug = True
    server.run(host='0.0.0.0', threaded = True)