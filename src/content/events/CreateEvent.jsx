import {useState} from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {BsToggle2Off  } from 'react-icons/bs';

const CreateEvent = () =>{
const [event,setEvent] = useState('');
		const [category,setCategory] = useState(' ');
		const [size,setSize] =  useState();
		const [show,setShow] =  useState(false);
		const [info,setInfo] =  useState();
		const handleSubmit = (e) =>{
		e.preventDefault();
		console.log("")
	}
	const handleClick = () =>{
		setShow(!show)
	} 
	return(
	<div>
	<div className = " flex flex-wrap content-start space-x-8 mb-2 pt-5"  >
			<AiOutlineArrowLeft size="30px" className="cursor-pointer text-white" />
			<h2 className = "font-Montserrat font-bold text-3xl text-white ">Create Event</h2>
			<br />
			<br />
			</div>
			<form onSubmit = {handleSubmit}>
		<div className = 'ml-16 text-white mr-16'>
		<div >
		{/*Event Name*/}
		<label htmlFor = 'Event'><strong>Event Name</strong> </label>
		<div className = "pt-3"/>
		<input className = 'w-full rounded-full text-black ' type = 'text' 
		id = 'event' 
		name = 'event' 
		value = {event} 
		onChange = {(e)=>setEvent(e.target.value)} />
		</div>
		<br />
		<div className = "flex flex-wrap content-start space-x-8" >
		<div>
		{/*Timing*/}
		<label htmlFor = 'Timings'>
		<strong>Event Timings</strong>: </label>
		<div className = "pt-3"/>
		<input className = "w-full rounded-full text-black" type = "time" name = "Date" id = "Date" />
		</div>
		<div>
		{/*Deadline*/}
		<label htmlFor = 'date'><strong>Registration Deadline: </strong></label>
		<div className = "pt-3"/>
		<input className = "w-full rounded-full text-black" type = 'date' 
		id = 'Date' 
		name = 'Date'  />
		</div>
		</div>
		<br />
		<div className = "flex flex-wrap content-start space-x-8">
		<div>
		{/*Category*/}
		<label htmlFor = 'Category'><strong>Categories</strong> </label>
		<div className = "pt-3"/>
		<input className = "w-full rounded-full text-black"  type = 'text' 
		id = 'category' 
		name = 'category' 
		value = {category} 
		onChange = {(e)=>setCategory(e.target.value)} />
		</div>
		<div>
		{/*Team size*/}
		<label htmlFor = 'size'><strong>Team size</strong> </label>
		<div className = "pt-3"/>
		<input className = "w-full rounded-full text-black" type = 'number' 
		id = 'size' 
		name = 'size' 
		value = {size} 
		onChange = {(e)=>setSize(e.target.value)} />
		</div>
		</div>
		<br />
		<div>
		{/*Team info*/}
		<label htmlFor = 'info'><strong>Event info</strong> </label>
		<div className = "pt-3"/>
		<input className = " w-full rounded h-24 text-black " type = 'text' 
		id = 'info' 
		name = 'info' 
		value = {info} 
		onChange = {(e)=>setInfo(e.target.value)} />
		</div>
		<br />
		<h3>Do you want users to register to this event from our portal?</h3>
		{show?<BsToggle2Off size="50px" className="cursor-pointer transform rotate-180  " onClick = {handleClick}/>:
		<BsToggle2Off size="50px" className="cursor-pointer transform rotate-0  " onClick = {handleClick}/>}
		<br />
		</div>
		</form>
		</div>
	)
}

export default CreateEvent;