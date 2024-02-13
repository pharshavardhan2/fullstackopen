import axios from "axios"

const BASE_URL = 'http://localhost:3001/contacts'

const getAll = () => axios.get(BASE_URL).then(response => response.data)

const create = newObject => axios.post(BASE_URL, newObject).then(response => response.data)

const remove = id => axios.delete(`${BASE_URL}/${id}`)

export default { getAll, create, remove }