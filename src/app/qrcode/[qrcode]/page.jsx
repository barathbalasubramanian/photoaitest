'use server'
import QrCodeGen from "./Components/GenerateQrCode/page";
export default async function Home({ params }) {
  return <QrCodeGen EventName={params.qrcode}/>
}
