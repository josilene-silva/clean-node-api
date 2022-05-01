import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    app.post('/api/signup', (req, res) => {
      res.send()
    })
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Josilene',
        email: 'josilenevitoriasilva@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
