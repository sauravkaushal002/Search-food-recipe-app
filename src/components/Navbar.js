import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import { useEffect,useState } from 'react';
import { search } from '../redux/action';

export default function Navbar() {
const [food ,setfood]=useState()

  const recipes=useSelector((state)=>state.user.recipes)
  const data =useSelector((loading)=>loading.user.loading)
  console.log(data)
  console.log(recipes?.data?.hits[0]);
  const dispatch=useDispatch()
  // useEffect(()=>{
  
  // },[])
  const fetch=()=>{
    dispatch(search())
  }

  const get =()=>{
    

    dispatch(search(food))
    }
    // const meals=()=>{
    //   if(recipes.mealType=="lunch/dinner"){
    //     return console.log("mealType")
    //   }
    // }
  
  

  return (
<>
    
     <header className=" bg-gray-300 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
      <img src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-food-logo-png-image_4743675.png" className="w-10 h-10 text-white p-2 " viewBox="0 0 24 24">
        {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
      </img>
      <span className="ml-3 text-xl">Baba ka Dhaba</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <button onClick={fetch} className="text-white inline-flex items-center bg-indigo-500  border-0 py-1 px-3 focus:outline-none hover:text-black hover:bg-gray-200 rounded text-base  lg:mt-4 lg:mr-4 mb-4 md:mt-4 md:mr-4">Home</button>
    
    </nav>
    <form>
      
      <div className='inp pr-5'>
    <input className="bg-gray-200 ml-4 px-2" type={"text"}

   placeholder="search here for recipes"  onChange={(e)=>(setfood(e.target.value))}/>
   </div>
    </form>
    <button onClick={get} className=" text-white inline-flex items-center bg-indigo-500  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded mt-4 lg:mb-4 text-base md:mb-4  ">Search
    
    </button>
  
  </div>


  </header>
{useEffect(()=>{
  dispatch(search(food))
  },[])}
  {/* {!recipes?.data?.hits&&<div></div>} */}
  
      {recipes?.data?.hits<1&&<div className='flex justify-center pt-[100px]'>

 <img src='https://i.gifer.com/origin/ff/ff17113095f355430637c2b17ccf6712_w200.gif'/>
 <div >
  <p className='mt-16 ml-5 bg-amber-700 font-semibold '>we dont have this type of food recipe</p>
  </div>
  </div>}
  <div className='flex flex-wrap justify-center gap-16 pt-6  overflow-hidden pb-10'>

  {recipes?.data?.hits?.map((item)=>(
 
   <>
   
   <div className='bg-white flex flex-wrap'>
    
      {/* <img src={item.image} className="w-[400px] "></img> */}
  
    <div className="max-w-sm rounded-2xl h-[650px] shadow-lg">
        <img className="w-[400px] px-4 py-4" src={item?.recipe?.image} alt="Sunset in the mountains" />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2">{item?.recipe?.label}</div>
           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cusine type</span>
          <div className="font-bold  mb-2">{item?.recipe?.cuisineType}</div>
          <a href={item.recipe?.url} target="blanck"  className="text-gray-700 text-base"> 
<button className='inline-flex items-center hover:bg- bg-indigo-500  py-1 px-2 rounded-md text-rose-50'>Get recipe</button>
          </a>
        </div>
        <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Best in taste</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Food</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Recipes</span>
        </div>
      </div>
     
   <div/>  
   </div> 
  
</> 
  ) )} 
    
  </div >
  
  <div className="  mt-[300px] lg:mt-0 bg-red-100 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-food-logo-png-image_4743675.png" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"/>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      
      <span className="ml-3 text-xl">Baba ka Dhaba</span>
    </a>
    <p></p>
    <nav className="md:ml-auto flex flex-wrap  text-base ">
      <a className="mr-5 font-semibold   hover:text-gray-900">Address -</a>
      <a className="mr-5 font-semibold hover:text-gray-900">Opposite to yes bank<br/>
      Solan - HP</a>
    </nav>
    </div>
    

    </>
  
  )
}
