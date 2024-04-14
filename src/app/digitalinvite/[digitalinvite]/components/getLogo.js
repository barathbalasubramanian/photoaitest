"use server"
import { cookies } from 'next/headers'
import { createClient } from '@supabase/supabase-js'

export default async function GetLogoUrl () {
    const cookieStore = cookies();
    const UserID = cookieStore.get('UserID');
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
    const data = await supabase.from('Studio-Admin').select('Logo').eq('UserID',UserID.value);
    return data.data[0].Logo;
}

