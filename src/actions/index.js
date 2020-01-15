import jsonPlaceholder from '../apis/jsonplaceholder'

export const fetchPosts =async()=>{
    //  Bad approach
    const response= await jsonPlaceholder.get('/post')
    return {
        type: 'FETCH_POSTS',
        payload: response

    }
}

//we are using this async await, so it is not working as plain javascript
// we did not return plain object, we returned request obejct.
// async wait will get transpiled into ES5 code.


// Without async await ,we do not get the data instead what we get is promise object,that is going to give excess to our data at some point.

//babeljs.io