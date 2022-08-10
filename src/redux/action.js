import {  USER_SEARCH ,USER_SEARCH_FAILED ,USER_SEARCH_SUCCESS} from "./type";
import axios from "axios";
import { useState } from "react";
  


export const search=(food)=>async (dispatch ,state)=>{


    
    dispatch({
        type:USER_SEARCH 
        
    })
    try {
        const res = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}&beta=false&app_id=780ef115&app_key=886f8ff08f4765cb080898dfdaa81672`)
        console.log(res)
        dispatch({
            type:USER_SEARCH_SUCCESS,
            payload:res
        })
        
    } catch (error) {
        console.log(error)
        dispatch({
            type:USER_SEARCH_FAILED,
            payload:error.message
        })
    }
}   