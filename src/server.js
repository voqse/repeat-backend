import fastify from 'fastify'
import authPlugin from './plugins/authPlugin.js'
import router from './router.js'

const authOptions = {
  secret: process.env.JWT_SECRET,
  issuer: process.env.JWT_ISS,
}

export default function buildServer(options = {}) {
  const server = fastify(options)

  // Register middlewares
  // server.register(helmet)
  // server.register(cors, {
  //   origin: /voqse\.com$/,
  // })
  // server.register(cookie, {
  //   secret: process.env.COOKIES_SECRET || 'you-must-define-a-secret', // for cookies signature
  //   // parseOptions: {}, // options for parsing cookies
  // })
  server.register(authPlugin, authOptions)
  server.register(router)

  return server
}
