import {useState} from "react"
import { GiCancel } from "react-icons/gi";
import { FaRegHandRock } from "react-icons/fa";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { MdOutlinePayments } from "react-icons/md";
import Payment from "./Payment";
const MenuFooter = () => {
  const [showPayment, setShowPayment] = useState(false)
const handleShowPayment = () =>{
  setShowPayment(!showPayment)
}


  return (
    <>
    {showPayment && <Payment/>}
    <footer className="mt-3 flex justify-between">
        <button className="text-[#E55C57] bg-[#FADEDD] font-bold text-3xl px-5 py-3 flex gap-4 items-center rounded-md"><GiCancel /> Cancel</button>
        <button className="text-[#5C6AC4] bg-[#DEE1F3] font-bold text-3xl px-5 py-3 flex gap-4 items-center rounded-md"><FaRegHandRock /> Hold</button>
        <button className="text-[#5C6AC4] bg-[#DEE1F3] font-bold text-3xl px-5 py-3 flex gap-4 items-center rounded-md"><HiOutlineReceiptPercent /> Discount</button>
        <button className="text-[#5C6AC4] bg-[#DEE1F3] font-bold text-3xl px-5 py-3 flex gap-4 items-center rounded-md" onClick={handleShowPayment}><MdOutlinePayments /> Pay Now</button>
    </footer>
    </>
  )
}

export default MenuFooter