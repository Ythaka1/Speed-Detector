from flask import Flask
from flask_migrate import Migrate
from .models import db
from .routes import init_routes

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    
    db.init_app(app)
    migrate = Migrate(app, db)  
    
    init_routes(app)
    
    return app