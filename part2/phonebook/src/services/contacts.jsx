import axios from "axios"

const BASE_URL = 'http://localhost:3001/contacts'

const getAll = () => axios.get(BASE_URL).then(response => response.data)

const create = newObject => axios.post(BASE_URL, newObject).then(response => response.data)

export default { getAll, create }