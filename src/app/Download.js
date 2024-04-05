'use client';
// import { unstable_noStore as noStore } from 'next/cache';
import axios from 'axios';
export default async function DownloadFun(imageurl) {
  // noStore();
  const array = await Promise.all(imageurl.map(async (item) => {
    const image = await axios.get(`https://selife-bucket.s3.ap-south-1.amazonaws.com/${item}`, { responseType: 'arraybuffer' });
    const raw = Buffer.from(image.data).toString('base64');
    return raw;
  }));
  return array;
}
