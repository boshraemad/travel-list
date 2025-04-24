import './App.css';
import { MdDelete } from "react-icons/md";
import {useState} from "react";
let items=[

  {id:1, item:"bag" ,quantity:2 , packed:false},
  {id:2, item:"sunscreen" ,quantity:1 , packed:false},
  {id:3, item:"water" ,quantity:3 , packed:false },
  {id:3, item:"water" ,quantity:3 , packed:false },
  {id:3, item:"water" ,quantity:3 , packed:false},
  {id:3, item:"water" ,quantity:3 , packed:false },
  {id:3, item:"water" ,quantity:3 , packed:false},
  {id:3, item:"water" ,quantity:3 , packed:false},
  {id:3, item:"water" ,quantity:3 , packed:false},
]
function App() {
  return (
    <div className="App">
        <Logo/>
        <Form/>
        <PackingList/>
        <State/>
    </div>
  );
}

function Logo(){
  return(
      <div className=" flex items-center justify-center w-full h-[100px] bg-orange-800 ">
          <h1 className="text-white font-bold text-2xl">Far Away !! </h1>
      </div>
  )
}

function Form(){
  const [item,setItem]=useState("");
  const [quantity,setQuantity]=useState(0);

  const handleItemInputChange=(value)=>{
    setItem(value);
  }
  const handleQuantityInputChange=(value)=>{
    setQuantity(value);
  }
   const addItemToList=()=>{
    items.push({id:items.length+1 , item:item , quantity:quantity , packed:false });
    console.log(items);
   }
  return(
      <div className="bg-orange-200 h-[100px] flex items-center justify-center">
          <form className="w-full flex items-center justify-between p-3" onSubmit={(e)=>{e.preventDefault()}}>
          <h3 className="text-orange-900 font-[600] text-lg">what Do you want to back with you?</h3>
              <div className>
                  <label className="me-2">count:</label>
                  <input type="numder" className="w-[100px] outline-none rounded-sm bg-transparent" onChange={(e)=>{handleItemInputChange(e.target.value)}}/>
              </div>
              <div>
                  <label className="me-2">item:</label>
                  <input type="text" className="w-[300px] outline-none rounded-sm bg-transparent" onChange={(e)=>{handleQuantityInputChange(e.target.value)}}/>
              </div>
              <button onClick={()=>{addItemToList()}} className="text-white bg-orange-900 px-3 py-1 rounded-lg">add</button>
          </form>
      </div>
  )
}

function PackingList(){
  return(
    <div className="list bg-orange-50 h-[400px] p-3"> 
      <ul className="flex flex-wrap justify-center gap-10">
        {
          items.map((item)=>{
            return<Item item={item}/>
          })
        }
      </ul>
    </div>
  )
}

function Item({item}){
  return(
    <li className=" flex items-center justify-center gap-1 w-[200px] font-bold">
      <button></button>
      <span className={item.packed? "":"" }>{item.quantity} {item.item}</span>
      <button><MdDelete className="text-xl text-red-700"/></button>
    </li>
  )
}

function State(){
  return(
    <div className="bg-emerald-400 flex items-center justify-center h-[95px]">
      <p className="text-lg font-bold text-white">you have Packed ... items</p>
    </div>
  )
}
export default App;
