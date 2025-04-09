# seed_db.py
from app import create_app
from app.seed import seed_data

app = create_app()

with app.app_context():
    seed_data()
    print("Database seeded!")