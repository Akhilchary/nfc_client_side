import React from 'react'
// import productsData from './prodCard1Data';
import "./services.css";
import {useState,useEffect} from 'react';
import axios from 'axios'
// import servicesdata from './servicesdata';

const ServicesCard = () => {

    // let card2imgcss={'margin-left':'3vw','padding':'2vw'};
    // if(props.p_or_c==='C'){
    //     card2imgcss={'margin-left':'3vw','padding':'2vw','height':'12vh','margin-top':'5vh','width':'10vw'};
    // }else{
    //     card2imgcss={};
    // }
    const [servicesdata,setServicesdata]=useState([]);
    useEffect(()=>{
        const gets=async()=>{
            let res=await axios.get("https://nfc-api-iare2.herokuapp.com/api/service");
            console.log(res.data);
            setServicesdata(res.data);
        }
        gets();
    });


  return (
    <>
   { servicesdata.map(x=>{
        return(
            <>
                <div className='serv-card-div'>
                    <div className='serv-card-img'>
                        <img src={x.serviceImage} alt="" />
                    </div>
                    <div className='serv-card-content'>
                        <p>{x.serviceName}</p>
                        <div className='serv-card-internal-con'>
                            <p>{x.serviceDesc}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    )}
    </>
  )
}

export default ServicesCard