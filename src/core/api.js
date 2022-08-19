import axios from 'axios'

const getHeaders = () => {
    let headers = null
    const token = localStorage.getItem('token')
    if (token) {
        headers = {
            'x-access-token': token,
        }
    }
    return headers
}
const getConfig = () => {
    const config = {}
    const headers = getHeaders()
    if (headers) {
        config.headers = headers
    }
    return config
}

const api = {
    get: async (url) => {
        const config = getConfig()
        try {
            const result = await axios.get(url, config)
            return result
        } catch (error) {
            throw error
        }
    },
    post: async (url, body = {}) => {
        const config = getConfig()
        try {
            const result = await axios.post(url, body, config)
            return result
        } catch (error) {
            throw error
        }
    },
    delete: async (url) => {
        const config = getConfig()
        try {
            const result = await axios.defaults(url, config)
            return result
        } catch (error) {
            throw error
        }
    },
    update: async (url) => {
        const config = getConfig()
        try {
            const result = await axios.update(url, config)
            return result
        } catch (error) {
            throw error
        }
    },
}

export default api
