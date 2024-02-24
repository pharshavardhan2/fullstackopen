import axios from "axios"

const BASE_URL = 'http://localhost:3001/api/notes'

const getAll = () => axios.get(BASE_URL).then(response => response.data)

const create = newObject => axios.post(BASE_URL, newObject).then(response => response.data)

const update = (id, newObject) => axios.put(`${BASE_URL}/${id}`, newObject).then(response => response.data)

export default { getAll, create, update }