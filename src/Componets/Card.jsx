import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { TbShoppingCartHeart } from "react-icons/tb";

const Card = ({img,title,star,reviews,prevPrice, newPrice}) => {
    return (
<section className="card">

        <img src={img}
        className='card-img' 
        alt={title} />
        <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <AiFillStar className='rating-star'/> <AiFillStar className='rating-star'/>  <AiFillStar className='rating-star'/>  <AiFillStar className='rating-star'/> 
            <span className='total-reviews'>({Math.floor(Math.random() * (50 - 10 + 1)) + 10})</span>
            <section className="card-price">
                <div className="price">
                    <del>{prevPrice}</del> ৳ {newPrice} 
                </div>
                
                <button className='btns-bag' onClick={() => window.location.href = '/display'}>𝑶𝒓𝒅𝒆𝒓 <TbShoppingCartHeart /></button>
         
            </section>
        </div>  
  
    </section>
    
    );
};

export default Card;


// hardtype data 
{/* <section className="card">
<img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
className='card-img'  />
<div className="card-details">
    <h3 className="card-title">shoe</h3>
    <AiFillStar className='rating-star'/> <AiFillStar className='rating-star'/>  <AiFillStar className='rating-star'/>  <AiFillStar className='rating-star'/> 
    <span className='total-reviews'>123</span>
    <section className="card-price">
        <div className="price">
            <del>1200$</del> 999$ 
        </div>
        <div className="bag">
            <LuShoppingBag  className='bag-icon'/>
        </div>
    </section>
</div>
</section> */}