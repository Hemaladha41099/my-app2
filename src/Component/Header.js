import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import {CiMenuBurger, CiSettings} from "react-icons/ci"
import {FcBusinessContact} from "react-icons/fc"
import{CgMenuGridO} from "react-icons/cg"
import{FaRegUserCircle} from "react-icons/fa"
import {AiOutlineQuestionCircle} from "react-icons/ai"
const Header = () => {
  return (<>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand m-20px" href="#" style={{padding:"0px 20px 0 40px"}}><CiMenuBurger/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"><FcBusinessContact/><span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><h5>Contacts</h5></a>
      </li>
      
      
    </ul>
  
      <form className="form1 my-2 my-lg-0" style={{ padding:"0px 40px 0 2px"}} >
      <input className="form-control mr-sm-2"  type="search" placeholder="Search" aria-label="Search"/>
      {/* <button className="btn btn-outline-success my-2 my-sm-0 m-3" type="submit">Search</button> */}
    </form>
     <div className='navicon'> <a className="nav-link " href="#"><AiOutlineQuestionCircle/></a>
      
      <a className="nav-link"   href="#"><CgMenuGridO/></a>
   
      <a className="nav-link"  href="#"><FaRegUserCircle/></a></div>
       
     
  </div>
</nav>
  </>

//     <div classNameName='header flex flex space around'>
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" hresf="#">contacts<img src='google-logo.png'></img></a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
      
//     </ul>
//     <form className="form1">
//       <input className="form-control1 " type="search" placeholder="Search" aria-label="Search"/>
//       <button className=" btn btn-outline-success " type="submit">Search</button>
//     </form>
//     <ul><li>
//     <a className="btn btn-floating m-1" href="#!" role="button"
//           >
//         <CiSettings/></a></li></ul>
//   </div>
// </nav></div>
  );
};

export default Header;
