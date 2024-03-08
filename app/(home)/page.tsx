import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Bookingitem from "../_components/booking-items";
import Search from "./_components/search";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbeshop_item";


export default async function Home() {

 const  barbershops = await db.barbershop.findMany({})

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

      <div className="mt-6">
      <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 fount-bold">Recomendados</h2>

       <div className="flex px-5 gap-4 overflow-x-auto [&:: -webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) =>(
         <BarbershopItem key={barbershop.id} barbershop ={barbershop}/>
        ))}

      </div>
   </div>
   <div className="mt-6 mb-[4.5rem]">
      <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 fount-bold">Populares</h2>

       <div className="flex px-5 gap-4 overflow-x-auto [&:: -webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) =>(
         <BarbershopItem key={barbershop.id} barbershop ={barbershop}/>
        ))}

      </div>
   </div>
</div>
}