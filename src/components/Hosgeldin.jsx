import staj from "../img/staj.jpg"
import "../css/main.css"
import {useEffect, useState} from "react";
import {Staj23Service} from "../services/Staj23Service.js";

export default function Hosgeldin() {


    return (
        <>
            <div className="wrapper">
                <h1>Hoşgeldin</h1>
                <p>İddia ediyorum  Bu Dünyadaki En Harika Uygulama! </p>
                <img src={staj} alt="Staj Image" width={200} height={200} />
            </div>
        </>
    );
}
