import React from "react";
import { useSelector } from "react-redux";

function Footer() {
    const count = useSelector((state) => state.counter.value)
    return (
        <div> 
            <h5 class="white-text">Değişen değer :{count}</h5>
            </div>
    )
}
export default Footer;