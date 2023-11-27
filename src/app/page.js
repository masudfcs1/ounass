import { BiCar } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" max-w-[1200px] md:p-5 p-4 font-sans mx-auto my-[50px] md:my-[80px] capitalize">
      <h2 className=" font-extralight"> Home Page </h2>{" "}
      <div className="  w-full h-full justify-between">
        <Link href="/content/shipping-and-delivery">
          {" "}
          <p className="text-sm"> 2 HOUR DELIVERY IN DUBAI </p>{" "}
        </Link>{" "}
        <Link href="/content/payment">
          <p className="text-sm"> GO SEAMLESS WITH APPLE PAY </p>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}
