import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import "./Login.scss";
import { getAuth, signInAnonymously } from "firebase/auth";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  };

  const noName= () => { 
    getAuth();
  signInAnonymously(auth)
    .then(() => {
      // Signed in..
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      alert(error.message);
      // ...
    });
  };

  // const onClickGuestButton = () => {
  //   getAuth2();
  //   setError("")
  //   setLoading(true)
  //   //loginの処理で直接emailとpasswordをloginに渡しています。
  //   return login("guest@example.com", "password")
  //   .then(() => {
  //     history.push("/")
  //   })
  //   .catch((error) => {
  //     setError("failed!!")
  //   })
  //   .finally(() => {
  //       setLoading(false)
  //   });
  // }

  // const signIn2 = async () => {
  //   try {
  //     const auth = getAuth()
  //     await signInWithEmailAndPassword(auth, "","")
  //   } catch (e) {
  //     if (e instanceof FirebaseError) {
  //       console.log(e)
  //     }
  // //   }
  // }

  // const login = (email, password) => {
  //   return auth.signInWithEmailAndPassword(email, password)
  // }

  // signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });

    
  return (
    <div className="login">
      {/* <h2>ログインページです。</h2> */}

      <div className="loginLogo">
        <img src="./discordLogo.png" alt="" />
      </div>

      <Button onClick={signIn}>ログイン</Button>
      <Button onClick={noName}>認証なしログイン</Button>   
    </div>
  );
};

export default Login;
