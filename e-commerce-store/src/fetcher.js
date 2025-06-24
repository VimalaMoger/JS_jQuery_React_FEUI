
const BASE_URL = "http://localhost:3001";
//fetch API
const fetcher = async (resource) => {
    let responseObj = {errMessage: '', data: [] }
    try{
        const response = await fetch(BASE_URL + resource);
        if(!response.ok){
            throw new Error(`HTTP Error ${response.status}`);
        }
        const responseData = await response.json();
        responseObj.errMessage = '';
        responseObj.data = responseData;
        return responseObj; 
    }catch(error){
        responseObj.errMessage = error.message; 
        return responseObj;
    }    
}

export const getCategories = () => {
    return fetcher('/categories');
}

export const getProducts = (id) => {
    return fetcher('/products?catId=' + id);
}

export const getProductById = id => {
    return fetcher('/products/' +  id);
}

export const getProductsByQuery = query =>{
    return fetcher('/products?q=' + query)
}