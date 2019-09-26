import React from 'react'
import Dewalt from './img/brands/dewalt.png'
import Craftsman from './img/brands/craftsman.png'
import Bosch from './img/brands/bosch.png'
import Ryobi from './img/brands/ryobi.png'
import Stihl from './img/brands/stihl.png'
import Makita from './img/brands/makita.png'
import Milwaukee from './img/brands/milwaukee.png'
import Kobalt from './img/brands/kobalt.png'
import Toro from './img/brands/toro.png'

//import Craftsman from './assets/brands/craftsman.png'

class BrandImage {

  static set_image(brnd) {
  let img;
  let brand_images = [
    {
      brand_name: 'dewalt',
      brand_img: Dewalt
    },
    {
      brand_name: 'craftsman',
      brand_img: Craftsman
    },
    {
      brand_name: 'ryobi',
      brand_img: Ryobi
    },
    {
      brand_name: 'kobalt',
      brand_img: Kobalt
    },
    {
      brand_name: 'toro',
      brand_img: Toro
    },
    {
      brand_name: 'milwaukee',
      brand_img: Milwaukee
    },
    {
      brand_name: 'stihl',
      brand_img: Stihl
    }
]
    brand_images.map((b) =>{
      if(b.brand_name == brnd){
        img = b.brand_img
      }
    })
    return img
  }

}


export default BrandImage
