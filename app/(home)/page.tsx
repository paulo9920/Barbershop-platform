import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Bookingitem from "../_components/booking-items";
import Search from "./_components/search";


export default function Home() {
 return <div>
    <Header/>

<div className="px-5 pt-5">
    <h2 className="text-xl font-bold">Olá Paulo!</h2>
    <p className="capitalize text-sm">{format(new Date(), "EEEE',' dd 'de' MMMM", {
        locale: ptBR
    })}</p>
 </div>
    <div className="px-5 mt-6">
    <Search />
    </div>
    <div className="px-5 mt-6">
      <h2 className="text-xs mb-3 uppercase text-gray-400 fount-bold">Agendamentos</h2>
       <Bookingitem />
    </div>
 </div>
}