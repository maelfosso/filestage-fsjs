const request = require('supertest');
const api = require('../api');

const http = request(api);

describe('Create a TODO - POST /', () => {

  it('should create a new post', async () => {
    const res = await http.post('/')
      .send({
        text: 'first todo'
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('completed');
    expect(res.body).toHaveProperty('dueDate');
    expect(res.body.dueDate).toBe(null);
  });

  it('should set the due date of a post', async () => {
    const todo = await http.post('/')
      .send({ text: 'first todo' })
    
    await http.patch(`/${todo.id}`)
      .send({ dueDate: '2021-08-26'})
      .expect(200);

    const res = http.get(`/${todo.id}`)
      .send()

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toBe(todo.id);
    expect(res.body.dueDate).toBe('2021-08-26');
  });

});
