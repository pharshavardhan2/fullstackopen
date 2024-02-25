import app from './app.js'
import config from './utils/config.js'
import logger from './utils/logger.js'

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})