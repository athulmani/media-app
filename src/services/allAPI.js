//upload a video

import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverUrl";


export const uploadVideo = async(reqBody)=>{
//cal post http requesrtto "  http://localhost:4000/videos"  to add videeo to json server and return responce add comment


    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}


//get all videos from json servers
export const getALLVideos = async () =>{
    //make get http request to  "  http://localhost:4000/videos" to get all videos from json server to view component

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}


//get a videos from json servers
export const getVideo = async (id) =>{
    //make get http request to  "  http://localhost:4000/videos" to get INDIvuchal videos from json server to view component

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}


//remove a videos from json servers
export const deleteVideo = async (id) =>{
    //make get http request to  "  http://localhost:4000/videos" to DELETE  videos from json server to view component

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}


//store watch history in json server
export const addToHistory = async(videoDetails)=>{
        //make post http request to  "  http://localhost:4000/history" to add watchhistory  videos to  tthe  json server to view return responce to jon server
        return await commonAPI("POST",`${serverUrl}/history`,videoDetails)

}


//get all watching videos in history
export const getAllHistory = async()=>{
    //        //make post http request to  "  http://localhost:4000/history" to add watchhistory  videos to  tthe  json server to view return responce to jon server

    return await commonAPI("GET",`${serverUrl}/history`," ")
}


//delete items from watching history
export const deleteHistory = async(id)=>{
    //        //make post http request to  "  http://localhost:4000/history" to add watchhistory  videos to  tthe  json server to view return responce to jon server

    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})
}


export const addCategory = async(reqBody)=>{
    //        //make post http request to  "  http://localhost:4000/history" to add watchhistory  videos to  tthe  json server to view return responce to jon server

    return await commonAPI("POST",`${serverUrl}/categories`,reqBody)
}


//get all watching videos in history
export const getAllCategory = async()=>{
    //        //make post http request to  "  http://localhost:4000/history" to add watchhistory  videos to  tthe  json server to view return responce to jon server

    return await commonAPI("GET",`${serverUrl}/categories`," ")
}


//get all watching videos in history
export const deleteCategory = async(id)=>{
    //        //make post http request to  "  http://localhost:4000/history" to add watchhistory  videos to  tthe  json server to view return responce to jon server

    return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})
}


//update category from json server
export const updateCategory = async (id,body)=>{
        //        //make post http request to  "  http://localhost:4000/history" to put  videos to  tthe  json server to view return responce to jon server

    return await commonAPI ("PUT",`${serverUrl}/categories/${id}`,body)
}