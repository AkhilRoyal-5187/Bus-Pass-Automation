"use client";
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import { useRouter } from "next/navigation";

interface LoginCardsProps {
    imageSrc: string;
    label: string;
    redirectTO: string;
};

export default function LoginCards({imageSrc, label, redirectTO} : LoginCardsProps) {
        const router = useRouter();

    const handleClick=() =>{
        console.log("Redirecting to", redirectTO); // <- ✅ debugging line

        router.push(redirectTO);
    }
  return (
    <div onClick={handleClick}>

      <Card className="py-4 mt-25 cursor-pointer">
      <CardHeader className="pb-0 pt-2 px-4 flex-col">
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageSrc}
          width={270}
        />
      </CardBody>
              <p className="text-tiny uppercase font-bold text-center">{label}</p>

    </Card>
    </div>  
  );
}
