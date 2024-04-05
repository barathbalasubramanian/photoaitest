'use client'
import QrCodeGen from "./Components/GenerateQrCode/page";

export default async function Home({ params }) {
  console.log(params.qrcode,"Params");
  return <QrCodeGen EventName={params.qrcode}/>
}


