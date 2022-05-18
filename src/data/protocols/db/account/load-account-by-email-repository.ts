import { AccountModel } from '../../../usecases/add-account/bd-add-account-protocols'

export interface LoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<AccountModel>
}
