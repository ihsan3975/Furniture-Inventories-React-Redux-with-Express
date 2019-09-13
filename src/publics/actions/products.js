import Axios from 'axios'

const token = window.localStorage.getItem("token")

export const getProducts = (sort, sortBy, limit, page, key) => {
    return {
        type: 'GET_PRODUCTS',
        payload: Axios.get(`/products?sort=${sort}&sortBy=${sortBy}&limit=${limit}&page=${page}&key=${key}`)
    }
}

export const getProductsAuth = (sort, sortBy, limit, page, key) => {
    return {
        type: 'GET_PRODUCTS_AUTH',
        payload: Axios.get(`/products?sort=${sort}&sortBy=${sortBy}&limit=${limit}&page=${page}&key=${key}`, {
            headers: {
                auth: token
            }
        })
    }
}

export const getProductById = (productid) => {
    return {
        type: 'GET_PRODUCT_BY_ID',
        payload: Axios.get(`http://localhost:4000/products/${productid}`,{
            headers:{
                auth: token
            }
        })
    }
}


export const addQty = (productid) => {
    return {
        type: 'ADD_PRODUCT_QTY',
        payload: Axios.patch(`http://localhost:4000/products/qty/add/1/${productid}`,{
            headers:{
                auth: token
            }
        })
    }
}

export const reduceQty = (productid) => {
    return {
        type: 'ADD_PRODUCT_QTY',
        payload: Axios.patch(`http://localhost:4000/products/qty/reduce/1/${productid}`,{
            headers:{
                auth: token
            }
        })
    }
}


export const addProduct = (data) => {
    return {
        type: 'ADD_PRODUCT',
        payload: Axios.post('http://localhost:4000/products/users', data, {
            headers:{
                auth: token
            }
        })
    }
}

export const deleteProduct = (productid) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: Axios.delete(`http://localhost:4000/products/users/${productid}`,{
            headers:{
                auth: token
            }
        })
    }
}

export const editProduct = (productid, data) => {
    return{
        type: 'EDIT_PRODUCT',
        payload: Axios.put(`/products/users/${productid}`, data, {
            headers:{
                auth: token
            }
        })
    }
}

