import React, { useState } from 'react'
import './ProductForm.scss'
import api from '@api'
export default function ProductForm() {
    const [pictures, setPictures] = useState([
        // {
        //     url: "abc",
        //     file: null
        // }
    ]);

    function deleteSelectPicture(index) {
        let tempPictures = [...pictures];
        tempPictures = tempPictures.filter((picture, indexMap) => indexMap != index);
        setPictures(tempPictures);
    }
    
    async function createProduct(eventForm) {
        eventForm.preventDefault(); // khử hành vi form

        let formData = new FormData();

        for (let i in pictures) {
            formData.append("pictures", pictures[i].file)
        }

        formData.append("category_id", "1")
        formData.append("name", eventForm.target.name.value)
        formData.append("price", eventForm.target.price.value)
        formData.append("des", eventForm.target.des.value)

        api.products.create(formData)
        .then(res => {
            console.log("res", res)
        })
        .catch(err => {
            alert("Sập server!")
        })
    }   
  return (
    <form onSubmit={(e) => {
        createProduct(e)
    }} className='product_form' action="">
        ADD NEW PRODUCT
        <div>
            Name: <input type="text" name='name'/>
        </div>
        <div>
            Price: <input type="text" name='price'/>
        </div>
        <div>
            Des: <textarea name="des"cols="30" rows="10"></textarea>
        </div>
        <div>
            Pictures: <input onChange={(e) => {
                if (e.target.files.length != 0) {
                    //console.log("đã chọn hình", e.target.files)
                    let tempPictures = [...pictures];

                    for (let i in  e.target.files) {
                        if(i == "length") {
                            break;
                        }
                        let item = {
                            file: e.target.files[i],
                            url: URL.createObjectURL(e.target.files[i])
                        }
                        tempPictures.push(item);
                    }
                    
                    setPictures(tempPictures);

                    e.target.value = null; // Reset the input value
                }
            }} type="file" multiple/>
        </div>
        <div>
            {
                pictures.map((picture, index) => (
                    <img onClick={() => {
                        deleteSelectPicture(index)
                    }} key={Date.now() * Math.random()} className='product_preview_img' src={`${picture.url}`} />
                ))
            }
        </div>
        <button>Add</button>
    </form>
  )
}
