import { Router } from 'express'
import { adaptRoutes } from '../adapters/express-routes.adapter'
import { makeSignUpController } from '../factories/signup/signup'

export default (router: Router): void => {
  router.post('/signup', adaptRoutes(makeSignUpController()))
}
