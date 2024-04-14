"use server"
import { cookies } from 'next/headers'
import { createClient } from '@supabase/supabase-js'

export default async function GetEventData (eventName) {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
    
    const foldersQuery = await supabase.from('UserEvents').select('DigitalInvite').eq("EventName", `${eventName}`);
    return foldersQuery.data[0]["DigitalInvite"][0];
}
