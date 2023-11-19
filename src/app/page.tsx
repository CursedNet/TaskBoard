'use client'

import './page.sass'

import {useEffect, useRef, useState} from "react";
import axios from "axios";


export default async function Home() {

    


    return (
        <div className='home'>
            <div className='d'>
                <div id='nodes-container' className="container">
                    <div className='grid_content' id='card_block'></div>
                </div>
            </div>
        </div>
    )
}
