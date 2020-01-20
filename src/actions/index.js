import jsonPlaceholder from '../apis/jsonplaceholder'


//With Redux-thunk we can use async await
// We are defining function that is returning a function
// export const fetchPosts= () =>{ 
//    return  async function (dispatch, getState){
  
//     const response=  await jsonPlaceholder.get('/posts')
//     dispatch({type:'FETCH_POSTS', payload: response.data})


//     }
// } 

export const fetchPosts= () => async (dispatch, getState)=> {
   
     const response=  await jsonPlaceholder.get('/posts')
     console.log(response)
     dispatch({type:'FETCH_POSTS', payload: response.data})
 
 
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

// Very Very important Summary
//When we are // We can return or not return anything from the inner function, it is only that, 
// what we return from outer function, action creater itself, we are concerned about. 

// When we are making use of Redux thunk, we are not going to return any actions from the inner function anymore. '
// We can normally have action creator that means function that returns the action with type property, totally an option. 

// With Redux thunk we get the ability to return the function as well. Inside of inner function no need to return an action. 
// Instead, we call the dispatch function with the action, we are going to call . 
//  Just call the dispatch with the action object
