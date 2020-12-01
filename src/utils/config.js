require('dotenv-flow').config()

const HOSTNAME = process.env.HOSTNAME
const PORT = process.env.PORT

module.exports = {
  HOSTNAME,
  PORT
}
