import React from "react"
import { useParams } from "react-router-dom";
import {productlist} from './Homepage';

function SinglePage() {
    const{ id }= useParams();
    console.log('product list' , id);

    const card = productlist.find((card)=> card.id ==id);
        return (
        <div>
            <p>hello</p>
        </div>
        )
}

export default SinglePage