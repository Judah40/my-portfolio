"use client";

// import Image from "next/image";
import { useEffect } from "react";
// import { useRouter } from "next/router";
import { Dots } from "react-activity";
import { useRouter } from "next/navigation";
import "react-activity/dist/library.css";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/pages/Home");
    }, 2000);
  }, []);
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <Dots color="blue" />;
    </div>
  );
}
