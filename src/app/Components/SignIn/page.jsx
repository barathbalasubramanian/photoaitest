'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import Styles from "./page.module.css"
import Login from "./Login";
import Swal from 'sweetalert2';
import Loader from "@/app/loader/page";
export default function SignIn(){
    const [chechbox,checkboxvalue] = useState(true);
    const [user,uservalue] = useState('');
    const [password,passwordvalue] = useState('');
    const [loadeer,loadderevalue] = useState(false);
    useEffect(()=>{
        const userid = localStorage.getItem('UserName');
        const passwordv = localStorage.getItem('Password');
        if(userid && passwordv){
            uservalue(userid);
            passwordvalue(passwordv);
        }
        if(user != '' && password != ''){
            HandelSubmit(user,password);
        }
    },[user,password]);
    const HandelSubmit = async(username,userpass)=>{
        loadderevalue(true)
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
        const message = await Login(username,userpass);
        Toast.fire({
            icon: message.icon,
            title: message.message
        });
        if(message.icon === 'success' && !chechbox){
            localStorage.setItem('UserName',username)
            localStorage.setItem('Password',userpass)
        }
        loadderevalue(false)
    }
    return(
        <>
        {loadeer?<Loader/>:""}
        <div className={Styles.SignInDiv}>
            <form className={Styles.SignInInnerDiv} onSubmit={(e)=>{e.preventDefault();HandelSubmit(e.target.UserID.value,e.target.Password.value)}}>
                <div className={Styles.SignInInneDiv}>
                    <h1>Sign in</h1>
                    <input type="text" name="UserID" className={Styles.InputBox}placeholder="User ID" required/>
                    <input type="password" name="Password" className={Styles.InputBox}placeholder="Password" required/>
                    <div className={Styles.ForCheckAndForgot}>
                        <div onClick={()=>{if(chechbox){checkboxvalue(false)}else{checkboxvalue(true)}}}><img src={chechbox?'/svg/CheckedFalse.svg':'/svg/CheckedTrue.svg'} alt="" /><div>Remember me</div></div>
                        <Link href=''>Forgot Password?</Link>
                    </div>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
        </>
    )
}