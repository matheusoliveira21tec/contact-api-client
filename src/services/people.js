import Api from "./api";

const PeopleService = {
    index: () => Api.get("/People"),
    list:(id) => Api.get(`/People/${id}`),
    create: (params) => Api.post('/People/', params),
    delete: (id) => Api.delete(`/People/${id}`),
    update: (id, params) => Api.put(`/People/${id}`, params)
}

export default PeopleService;