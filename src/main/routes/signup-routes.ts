import { Router } from 'express'
import { adaptRoutes } from '../adapters/express/express-routes.adapter'
import { makeSignUpController } from '../factories/signup/signup-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoutes(makeSignUpController()))
}
