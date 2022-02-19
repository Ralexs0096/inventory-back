import express, { Application } from 'express'

class Server {
  public app: Application
  private port: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '4000'
  }

  getConnection() {}

  middlewares() {}

  routes() {}

  listen() {
    this.app.listen(this.port, () =>
      console.log('Server running on port', this.port)
    )
  }
}

export default Server
