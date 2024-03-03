import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Header = () =>{
    return(
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
            <Image src="/Logo.png" alt="FSW barber" height={22} width={120}/>
            <Button variant="outline" size="icon" className="h-6 w-6">
                <MenuIcon size={18}/>
            </Button>
            </CardContent>
        </Card>
    );
}
export default Header;