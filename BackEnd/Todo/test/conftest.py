import pytest
from src.routesTodo import app
from src import db
from src.models import Todo

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client