import React, { useState,useEffect} from 'react'
import "./productsCust.css";
// import productsData from './prodCard1Data';
// import custData from './custData';
import {Card1} from './ProdCard1';
import Card2 from './ProdCard2';
import Footer from './footer-navbar/footer';
import Navbar from '../../Components/navbar/navbar.jsx';
import img1 from './prod-images/img1.png';
import axios from "axios";

function ProductsCust() {
  let [custdata,setCustdata]=useState([]);
  let [productsdata,setProductsdata]=useState([]);

  useEffect(()=>{
    const fetchData=async ()=>{
      let resp=await axios.get("https://nfc-api-iare2.herokuapp.com/api/prod");
      let resc=await axios.get("https://nfc-api-iare2.herokuapp.com/api/cust");
      setProductsdata(resp.data);
      setCustdata(resc.data);
      
      console.log("skdlfj skdfj jk ",productsdata);
      console.log(" custdata ",custdata);
    }
    fetchData();
  },[])


  const activeBtncss={
    backgroundColor:"#0073CB",
    width:"59vw"
  }
  const activedivcss={
    width:"60.3vw",
    color:'white'
  }

  const inactiveBtncss={
    backgroundColor:"#D2E7F8",
    width:"38.4vw"
  }
  const inactivedivcss={
    width:"39.4vw",
    color:'black'
  }
  let divProdCss=activedivcss;
  let btnProdCss=activeBtncss;
  let divCustCss=inactivedivcss;
  let btnCustCss=inactiveBtncss;

  const [toggle,setToggle]=useState("P");

  const setP=()=>{
    setToggle("P")
    // console.log(toggle);
  }
  const setC=()=>{
    setToggle("C");
    
  }
  console.log(toggle);
  let prodcustdata=productsdata;
  if(toggle==="P"){
    divProdCss=activedivcss;
    btnProdCss=activeBtncss;
    divCustCss=inactivedivcss;
    btnCustCss=inactiveBtncss;
    prodcustdata=productsdata;
  }else{
  
    divCustCss=activedivcss;
    btnCustCss=activeBtncss;
    divProdCss=inactivedivcss;
    btnProdCss=inactiveBtncss;
    prodcustdata=custdata;
  }
  
  console.log("skdlfj skdfj jk ",productsdata);
  console.log(" custdata ",custdata);


  return (
    <>
    <Navbar />
    <div className='skewed-img-div'>
      <div className='skew-con'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitm ipsum dolor sit.</p>
      </div>
      <div className='skewed-img'>
        <img src={img1} alt="" />
      </div>
    </div>


    <div className='prod-cust-div'>
        <div className='prod-btn-div' style={divProdCss} onClick={setP}>
          <button className='prod-btn' style={btnProdCss} ></button>
          <p >OUR PRODUCTS</p> 
        </div>
        <div className='cust-btn-div' style={divCustCss} onClick={setC}>
          <button className='cust-btn' style={btnCustCss} ></button>
          <p> OUR CUSTOMERS</p>
        </div>
    </div>
    

    <div className='card1-div'>
      <Card1 Data={prodcustdata} p_or_c={toggle} />
    </div>

    <div className='con'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitm ipsum dolor sit.</p>
    </div>


    <div className='products-info'>
      <Card2 Data={prodcustdata}  p_or_c={toggle} />
    </div>

    <Footer />
    </>

  );
}

export default ProductsCust;