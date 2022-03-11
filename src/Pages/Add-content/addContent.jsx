import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './addContent.css';

const AddContent = () => {
    let [prodname,setProdname]=useState('');
    let [prodimg,setProdimg]=useState('');
    let [proddesc,setProddesc]=useState('');

    let [custname,setCustname]=useState('');
    let [custimg,setCustimg]=useState('');
    let [custdesc,setCustdesc]=useState('');

    let [servname,setServname]=useState('');
    let [servimg,setServimg]=useState('');
    let [servdesc,setServdesc]=useState('');


    function getProdimg(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setProdimg(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    function getCustimg(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setCustimg(reader.result);
            console.log("reader result",reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    function getServimg(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setServimg(reader.result);
            console.log("reader result",reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }


    const prodSubmit=()=>{
        if(prodimg===''){alert('select a product image')}
        if(proddesc===''){alert('enter a product description')}
        if(prodname==='') alert('enter a product name')
        if(prodimg!=='' && proddesc!=='' && prodname!==''){
            const send=async()=>{
                const res=await axios.post("/prod/",{
                    prodName:prodname,
                    prodImage:prodimg,
                    prodDesc:proddesc
                });
                console.log(" prod response ",res);
            }
            send();
        }
        
    }


    const custSubmit=()=>{
        if(custimg===''){alert('select a product image')}
        if(custdesc===''){alert('enter a product description')}
        if(custname==='') alert('enter a product name')
        if(custimg!=='' && custdesc!=='' && custname!==''){
            const send=async()=>{
                const res=await axios.post("/cust/",{
                    custName:custname,
                    custImage:custimg,
                    custDesc:custdesc
                });
                if(res.status===200){
                    alert("customer data added");
                    console.log("customer data added");
                    setProddesc('');
                    setProdname('');
                    setProdimg('');
                }
                console.log(" cust response ",res.status);
            }
            send();
        }
    }
    const serviceSubmit=()=>{
        if(servimg===''){alert('select a product image')}
        if(servdesc===''){alert('enter a product description')}
        if(servname==='') alert('enter a product name')
        if(servimg!=='' && servdesc!=='' && servname!==''){
            const send=async()=>{
                const res=await axios.post("/service/",{
                    serviceName:servname,
                    serviceImage:servimg,
                    serviceDesc:servdesc
                });
                console.log(" prod response ",res);
            }
            send();
        }
    }
  return (
    <div className='all'>
        
        <div className='prod-div'>
            <h3>Add Product</h3>
            <label htmlFor="prod-name">Product Name</label>
            <input type="text" id="prod-name" name='prod-name' value={prodname} onChange={e=>setProdname(e.target.value)} /><br />
            <label htmlFor="prod-img">Product Image</label>
            <input type="file" id='prod-img' name='prod-img' onChange={e=>getProdimg(e.target.files[0])}  /><br />
            <label htmlFor="prod-desc">Product Description</label>
            <input type="text" id='prod-desc' name='prod-desc' value={proddesc} onChange={e=>setProddesc(e.target.value)}  /><br />
            <button className='add' onClick={prodSubmit}>Submit</button><br />
        </div>

        <div className='cust-div'>
            <h3>Add Customer</h3>
            <label htmlFor="cust-name">Customer Name</label>
            <input type="text" id="cust-name" name='cust-name' value={custname}  onChange={e=>setCustname(e.target.value)}  /><br />
            <label htmlFor="cust-img">Customer Image</label>
            <input type="file" id='cust-img' name='cust-img' src="" alt="" onChange={e=>getCustimg(e.target.files[0])}  /><br />
            <label htmlFor="cust-desc">Customer Description</label>
            <input type="text" id='cust-desc' name='cust-desc' value={custdesc}  onChange={e=>setCustdesc(e.target.value)} /><br />
            <button className='add' onClick={custSubmit}>Submit</button><br />
        </div>
        <div className='serv-div'>
            <h3>Add service</h3>
            <label htmlFor="serv-name">Service Name</label>
            <input type="text" id="serv-name" name='serv-name'  onChange={e=>setServname(e.target.value)} /><br />
            <label htmlFor="serv-img">Service Image</label>
            <input type="file" id='serv-img' name='serv-img'  onChange={e=>getServimg(e.target.files[0])}  /><br />
            <label htmlFor="serv-desc">Service Description</label>
            <input type="text" id='serv-desc' name='serv-desc' onChange={e=>setServdesc(e.target.value)}  /><br />
            <button className='add' onClick={serviceSubmit}>Submit</button><br />
        </div>




    </div>
  )
}

export default AddContent