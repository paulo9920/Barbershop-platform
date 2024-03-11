"use client"

import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () =>{
    const {data} = useSession();
    const handleLoginClick = async () =>{
        await signIn();
    }
    return(
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
            <Image src="/Logo.png" alt="FSW barber" height={22} width={120}/>
            {/* <Button variant="outline" size="icon" className="h-6 w-6">
                <MenuIcon size={18}/>
            </Button> */}
            {data?.user ?(
                <div>
                    <Button onClick={() =>signOut()}>Logout</Button>
                    <h1>{data.user.name}</h1>
                </div>
            ):(
                <Button onClick={handleLoginClick}>Login</Button>
            )}
            </CardContent>
        </Card>
    );
}
export default Header;