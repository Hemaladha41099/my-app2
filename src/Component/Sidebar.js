import React from 'react'
import { PiListMagnifyingGlassFill } from "react-icons/pi"
import { FaSmileBeam, FaMagic, FaBookOpen, FaLink } from "react-icons/fa"
import { GiArcher, GiDramaMasks, GiBatMask, GiDrippingKnife } from "react-icons/gi"
import{GrFormAdd} from "react-icons/gr"
import { VscAccount } from "react-icons/vsc"
import { BsFillTrashFill } from "react-icons/bs"
import { CiTimer } from "react-icons/ci"
import { Contact } from './Contact'
const Sidebar = () => {
    return (
        <div className='sidebar '> <div className='text-black  '>
            <nav class="nav">
                <div className='nav-item1 '>
                    <button type="button " onClick={<Contact/>} className="btn  btn-outline-secondary btn-md text-lg"><h5><GrFormAdd type='icon1'/> Create Contact</h5></button>
                    <li><a class="nav-link text-black " href="#"><VscAccount className='icon1' /> <span className='a2'>Contact</span></a></li>
                    <li><a class="nav-link text-black" href="#"><CiTimer className="icon1" /><span  className='a2'>Frequent</span></a></li>
                    <li><a class="nav-link text-black" href="#"><GiDramaMasks className="icon1" /><span  className='a2'>Other contact</span></a></li>
                    <h5>Fix and control</h5>
                    <li><a class="nav-link text-black" href="#"><GiArcher className="icon1" /> <span className='a2'>merge & fix</span></a></li>
                    <li><a class="nav-link text-black" href="#"><FaMagic className="icon1" /> <span  className='a2'>import</span></a></li>
                    <li><a class="nav-link text-black" href="#"><BsFillTrashFill className="icon1" /> <span  className='a2'>Delete</span></a></li>
                    <li><a class="nav-link text-black" href="#"><CiTimer className="icon1" /> <span  className='a2'>Label</span></a></li>
                </div>
            </nav></div></div>
    )
}

export default Sidebar