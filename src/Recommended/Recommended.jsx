import React from 'react';
import "./Recommended.css"
import Buttons from '../Componets/Buttons';

const Recommended = ({handleClick}) => {
    return (
        <div>
           <h2 className='recommended-title'> দ্রুত অনুসন্ধান</h2>
           <div className="recommended-flex">
            <Buttons onClickHanlder={handleClick} value="" title="All Products"/>
            <Buttons onClickHanlder={handleClick} value="bracelet" title="bracelet"/>
            <Buttons onClickHanlder={handleClick} value="necklace" title="necklace"/>
            <Buttons onClickHanlder={handleClick} value="rings" title="rings"/>
            <Buttons onClickHanlder={handleClick} value="canvas" title="canvas"/>
           </div>
            
        </div>
    );
};

export default Recommended;

{/* <button className="btns">all Products</button>
<button className="btns"> Nike</button>
<button className="btns"> Puma</button>
<button className="btns"> Batta</button>
<button className="btns"> vans</button> */}