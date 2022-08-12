export interface IRepository<T> {
  getList(): Promise<T[]>
  findById(id: string): Promise<T>
  findByTitle?(title: string): Promise<T>
  findByEmail?(email: string): Promise<T>
  save(doc: T): Promise<T>
  update(id: string, payload: T): Promise<T>
  delete(id: string): Promise<T>
}
