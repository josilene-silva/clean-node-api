import { AccountModel } from '../../usecases/add-account/bd-add-account-protocols'

export interface LoadAccountByEmailRepository {
  load: (email: string) => Promise<AccountModel>
}
