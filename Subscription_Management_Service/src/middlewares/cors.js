import cors from 'cors'

const ORIGINS = ['http://localhost:5173', 'http://127.0.0.1:8080', 'http://127.0.0.1:5173']

export const corsMiddleware = ({ acceptOrigin = ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptOrigin.includes(origin)) return callback(null, true)
      if (!origin) return callback(null, true)

      return callback(new Error('Origin not allowed by CORS'))
    },
  })
