import React from 'react';
import "./Display.css"
import Navigation from '../Navigation/Nav';

const Display = () => {
    return (
        <div>

           <Navigation/>

            <div className='container'>
            <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e53521c4600805ff88b3bb5_peep-16.png" alt="Cute Cat GIF" />
            <h3>এখনই দ্রুত অর্ডার করুন🤭</h3>
            <p>অর্ডারের জন্য দয়া করে আমাকে ইনস্টগ্রামে ইনবক্স করুন, আপনার নির্দিষ্ট অর্ডার নিতে আমি সেখানে তৎপর</p>
            <button onClick={() => window.location.href = '/'}>👈ব্রাউজ করতে থাকুন   </button>
            
            </div>
        </div>
    );
};

export default Display;