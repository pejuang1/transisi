import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import {RiMenu4Line} from 'react-icons/ri'
import {FiSearch} from 'react-icons/fi'
import {BsCircle} from 'react-icons/bs'
import {IoIosAddCircleOutline} from 'react-icons/io'
import {AiFillCheckCircle} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import avatar1 from './img/avatar1.jpg'
import avatar2 from './img/avatar2.jpg'
import avatar3 from './img/avatar3.jpg'
import kotak3 from './img/tes.png'


class Home extends Component {
    state = { 
        items:[],
        tulisan:'Create quotation for app redesign project',
        kunci:'',
        currentItem:{
        text:'Create quotation for app redesign project',
        key:''
      }
     }


     addItem(e){
        e.preventDefault();
        const data = this.state.items
        const dataItem = 
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div className='mt-3'>
                <BsCircle className='mr-3' fontSize='32px' color='#d7d7d7'/>
                Create quotation for app redesign project
            </div>
            <div>
                <div className='mt-3'>
                    <Button size='sm' style={{borderColor:'#e2f4f9',backgroundColor:'#e2f4f9',borderRadius:'35px', width:'135px', color:'#6aadad', fontWeight:'bold'}}>Approved</Button>
                </div>
            </div>
        </div>
        data.push(dataItem)
        this.setState({items:data})
      }

    
    addToDo=()=>{
        return this.state.data
    }

    render() { 
        const tambahData = this.state.items
        return ( 
            <div style={{backgroundColor:'#e1e2ee', padding:'40px', fontFamily:'Ubuntu'}}>
                <div style={{position:'relative', backgroundColor:'#252a41', borderRadius:'15px'}}>
                    <div className='flexbiru' style={{backgroundColor:'#252a41',display:'flex',justifyContent:'space-between', borderRadius:'15px', height:'900px', position:'relative'}}>
                        <div>
                            <RiMenu4Line className='ml-4 mt-4' style={{color:'white', fontSize:'28px', backgroundColor:'#3a3f54'}}/>
                        </div>
                        <div className='paddingbiru' style={{padding:'100px'}}>
                            <div>
                                <h3 style={{color:'white'}}>Hi Samantha</h3>
                                <h6 style={{color:'grey'}}>Welcome back to the workspace, we missed You!</h6>
                            </div>
                            <br/>
                            <div className='paddingbiru' style={{display:'flex', backgroundColor:'#3a3f54', width:'300px', height:'40px', borderRadius:'20px', justifyItems:'center', alignItems:'center'}}>
                            &nbsp;&nbsp;&nbsp;<FiSearch fontSize='20px' color='white'/>
                                <div style={{color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search Task or project...</div>
                            </div>
                            <br/>
                            <br/>
                            <h6 style={{color:'white'}}>Projects &nbsp;&nbsp; (13)</h6>
                            <br/>
                            <img src={kotak3} alt=""/>
                        </div>
                        <div className='flexputih' style={{backgroundColor:'white', borderRadius:'15px', padding:'60px', position:'relative', margin:'10px'}}>
                            <div style={{position:'relative'}}>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <div>
                                <h3 style={{fontWeight:'bold'}}>Cyber Punk</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div>
                                    <img style={{borderRadius:'50%', width:'40px', height:'40px', position:'absolute', zIndex:'2'}} src={avatar1} alt=""/>
                                    <img style={{borderRadius:'50%', width:'40px', height:'40px', marginLeft:'32px', position:'absolute'}} src={avatar2} alt=""/>
                                    <img style={{borderRadius:'50%', width:'40px', height:'40px', marginLeft:'64px'}} src={avatar3} alt=""/>
                                    <IoIosAddCircleOutline style={{color:'#d7d7d7', fontSize:'25px'}}/>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <div>
                                    <h4 style={{fontWeight:'bold'}}>Today</h4>
                                </div>
                                <BsThreeDots style={{fontSize:'35px', color:'#d7d7d7'}}/>
                            </div>
                            <br/>
                            <p style={{borderBottom:'1px solid #d7d7d7'}}></p>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <div>
                                    <div>
                                        <AiFillCheckCircle className='mr-3' fontSize='32px' color='#36d4e0'/>
                                        Create Initial layout for homepage
                                    </div>
                                    <div className='mt-3'>
                                        <AiFillCheckCircle className='mr-3' fontSize='32px' color='#36d4e0'/>
                                        Fixing icons with transparant background
                                    </div>
                                    <div className='mt-3'>
                                        <AiFillCheckCircle className='mr-3' fontSize='32px' color='#36d4e0'/>
                                        Fixing icons with transparant background
                                    </div>
                                    <div className='mt-3'>
                                        <AiFillCheckCircle className='mr-3' fontSize='32px' color='#36d4e0'/>
                                        Create Initial layout for homepage
                                    </div>
                                    <div className='mt-3'>
                                        <BsCircle className='mr-3' fontSize='32px' color='#d7d7d7'/>
                                        Discussion regarding workflow improvement
                                    </div>
                                    <div className='mt-3'>
                                        <BsCircle className='mr-3' fontSize='32px' color='#d7d7d7'/>
                                        Create quotation for app redesign project
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Button size='sm' style={{borderColor:'#e2f4f9',backgroundColor:'#e2f4f9',borderRadius:'35px', width:'135px', color:'#6aadad', fontWeight:'bold'}}>Approved</Button>
                                    </div>
                                    <div className='mt-3'>
                                        <Button size='sm' style={{borderColor:'#e8edf7',backgroundColor:'#e8edf7',borderRadius:'35px', width:'135px', color:'#82a3c5', fontWeight:'bold'}}>In Progress</Button>
                                    </div>
                                    <div className='mt-3'>
                                        <Button size='sm' style={{borderColor:'#e8edf7',backgroundColor:'#e8edf7',borderRadius:'35px', width:'135px', color:'#82a3c5', fontWeight:'bold'}}>In Progress</Button>
                                    </div>
                                    <div className='mt-3'>
                                        <Button size='sm' style={{borderColor:'#e8edf7',backgroundColor:'#e8edf7',borderRadius:'35px', width:'135px', color:'#82a3c5', fontWeight:'bold'}}>In Progress</Button>
                                    </div>
                                    <div className='mt-3'>
                                        <Button size='sm' style={{borderColor:'#fdeee6',backgroundColor:'#fdeee6',borderRadius:'35px', width:'135px', color:'#d9b1a1', fontWeight:'bold'}}>In Review</Button>
                                    </div>
                                    <div className='mt-3'>
                                        <Button size='sm' style={{borderColor:'#eaefee',backgroundColor:'#eaefee',borderRadius:'35px', width:'135px', color:'#b6bac1', fontWeight:'bold'}}>Waiting</Button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {tambahData}
                            </div>
                            </div>
                            <div style={{right:'20px', bottom:'20px', position:'absolute'}}>
                                <Button onClick={(e)=>this.addItem(e)} style={{backgroundColor:'#884fc2', borderColor:'#884fc2', borderRadius:'15px'}} size='lg'>+</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;