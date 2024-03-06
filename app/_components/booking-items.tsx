"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Bookingitem = () => {
    return ( 
        <Card>
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col gap-2 py-5">
                    <Badge className="bg-[#221C30] text-primary hover:bg-[#221C30] w-fit">Confirmado</Badge>
                    <h2 className="font-bold">Corte de cabelo</h2>

                    <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                    <AvatarImage src="https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png"/>
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
                
                <h3 className="text-sm">Vintage Barber</h3>

                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-solid border-secondery">
                    <p className="text-sm">Fevereiro</p>
                    <p className="text 2xl">06</p>
                    <p className="text-sm">09:45</p>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default Bookingitem;