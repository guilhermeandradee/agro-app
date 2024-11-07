import Header from "../components/Header"
import '../App.css'
import { MdOutlineImage } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";
import Footer from "../components/Footer";
import { useState } from "react";


function AddPost(){
    return(
        <>
            <Header/>
            <main className="h-100-vh d-flex flex-column  align-items-center">
                
                <div className="row w-100 d-flex justify-content-center">
                    <div className="col-md-8 col-10 mt-5 p-3 bg-gray d-flex flex-column justify-content-center rounded-3 shadow">
                        <div className="d-flex justify-content-between">
                            <input placeholder="Titulo" className="w-100 me-4 rounded px-3 py-2  border-0 shadow" type="text" />
                            <button className="w-30 p-1 rounded border-0 shadow" ><MdOutlineImage/></button>
                        </div>
                        <div className="col-12 mt-3">
                            <textarea placeholder="Conteúdo" className=" px-3 py-2 rounded w-100 border-0 shadow" name="" id=""></textarea>
                        </div>
                        <div className="w-100 mt-3 d-flex justify-content-end px-3">
                            <div className="bg-black text-light d-flex justify-content-center align-items-center rounded-circle" style={{width: '30px', height: '30px'}}>
                                <IoPaperPlane/>
                            </div>
                        </div>
                         
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default AddPost