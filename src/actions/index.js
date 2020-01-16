import jsonPlaceholder from '../apis/jsonplaceholder'


//With Redux-thunk we can use async await
// We are defining function that is returning a function
export const fetchPosts= () =>{ 
   return  async function (dispatch, getState){
  
    const response=  await jsonPlaceholder.get('/post')
    dispatch({type:'FETCH_POSTS', payload: response})


    }
} 

// return  async  (dispatch)=>{
  
//     const response=  await jsonPlaceholder.get('/post')
//     dispatch({type:'FETCH_POSTS', payload: response})


//     }


//we are using this async await, so it is not working as plain javascript
// we did not return plain object, we returned request obejct.
// async wait will get transpiled into ES5 code.


// Without async await ,we do not get the data instead what we get is promise object,that is going to give excess to our data at some point.

//babeljs.io

// export const fetchPosts =()=>{
//     //  Bad approach
//     const promise= jsonPlaceholder.get('/post')
//     return {
//         type: 'FETCH_POSTS',
//         payload: promise
// 
//this wont work because by the time our action gets to a reducer, we wont have fetched our data
//

//     }
// }

//IT is also good

// export const selectPost =()=>{
//     return {
//         type: 'Select_Post'
//     }
// }