import axios from "axios"

const BASE_URL = '/api/persons'

const getAll = () => axios.get(BASE_URL).then(response => response.data)

const create = newObject => axios.post(BASE_URL, newObject).then(response => response.data)

const remove = id => axios.delete(`${BASE_URL}/${id}`)

const update = (id, newObject) => axios.put(`${BASE_URL}/${id}`, newObject).then(response => response.data)

export default { getAll, create, remove, update }