import { User } from '@/entities/User'

export interface IUsersRepository {
  getList(): Promise<User[]>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
  save(user: User): Promise<User>
  update(id: string, user: User): Promise<User>
}
