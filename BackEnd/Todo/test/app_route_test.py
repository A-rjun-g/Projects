from flask.testing import FlaskClient
from src.routesTodo import app
from src import db
from src.models import Todo
 

def test_index_route(client: FlaskClient):
    response = client.get('/')
    assert response.status_code == 200
    assert b'<h1>Todo App</h1>' in response.data
    assert b'<a>Login</a>' in response.data
    assert b'<a>Signup</a>' in response.data



def test_home_route(client: FlaskClient):
    response = client.get('/home/')
    assert response.status_code == 200
    assert b'<h1>TODO LIST</h1>' in response.data




def test_addTask_route(client: FlaskClient):
    response = client.post('/addTaskToList/', data={'todoitem': 'Test Todo'})
    assert response.status_code == 302

    with app.app_context():
        last_todo = Todo.query.order_by(Todo.id.desc()).first()
        assert last_todo is not None
        assert last_todo.text == 'Test Todo'
        assert last_todo.complete == False

    #Deleting the Entered test Query    
    with app.app_context():
        db.session.query(Todo).delete()
        db.session.commit()



def test_completeTask_route(client: FlaskClient):
    response = client.post('/addTaskToList/', data={'todoitem': 'Test Todo'})
    assert response.status_code == 302

    with app.app_context():
        last_todo = Todo.query.order_by(Todo.id.desc()).first()
        todo_id = last_todo.id

    response = client.get(f'/completeTask/{todo_id}')
    assert response.status_code == 302

    with app.app_context():
        completed_todo = Todo.query.get(todo_id)
        assert completed_todo is not None
        assert completed_todo.complete == True

    #Deleting the Entered test Query    
    with app.app_context():
        db.session.query(Todo).delete()
        db.session.commit()




def test_deleteTask_route():
    with app.app_context():
        newTodo = Todo(text='Test Todo', complete=False)
        db.session.add(newTodo)
        db.session.commit()
        todoId=newTodo.id

        todoToDelete = Todo.query.get(todoId)
        if todoToDelete:
            db.session.delete(todoToDelete)
            db.session.commit()



def test_index_route_invalid_method(client: FlaskClient):
    response = client.post('/')
    assert response.status_code == 405  




def test_home_route_unauthorized(client: FlaskClient):
    response = client.get('/home/')
    assert response.status_code == 401 



def test_addTask_route_missing_data(client: FlaskClient):
    response = client.post('/addTaskToList/')
    assert response.status_code == 400 



def test_completeTask_route_invalid_id(client: FlaskClient):
    response = client.get('/completeTask/9999')  
    assert response.status_code == 404  


 
def test_deleteTask_route_nonexistent_id(client: FlaskClient):
    response = client.delete('/deleteTask/9999')  
    assert response.status_code == 404  
