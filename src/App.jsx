import { useContext, useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { NoteAria } from "./components/NoteAria";
import { SocendHeader } from "./components/SocendHeader";
import { MainWraper } from "./components/MainWraper";
import { Wraper } from "./components/Wraper";
import { noteContext } from "./Store/store";

export default function App() {

  const {layout} = useContext(noteContext);

  return (
    <>
    {
      layout ? <MainWraper/> : <Wraper/>
    }
    </>
    
  )
}