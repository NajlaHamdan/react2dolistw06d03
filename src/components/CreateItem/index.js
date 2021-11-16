import React from 'react'
import axios from 'axios';
const BASE_URL = "http://localhost:4000";

const CreateItem = () => {
    function createItem(item){
        axios.post(`${BASE_URL}/`),{
            result:item,
        }.then(function(res){

        }).catch(function(err){
            console.log(err);
        })
    }
    return (
        <div>
            
        </div>
    )
}

export default CreateItem
