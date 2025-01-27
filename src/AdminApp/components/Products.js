import { useState, useEffect } from "react";

const Products = () => {

    let[products, updateProducts] = useState([]);

    const getProducts = () => {

        let url = "";

        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            
        })


    }

    return(

        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <table className="table">
                        <thead className="table-success"> 
                            <tr>
                                <th> Name </th>
                                <th> Email </th>
                                <th> Contact Number </th>
                                <th> Address </th>
                                <th> Buying Preference </th>
                                <th> Pooja Preference </th>
                            </tr>
                        </thead>

                        <tbody className="table-primary">
                            
                                {
                                    products.map((product, index)=>{
                                        <tr>

                                        </tr>
                                    })
                                }

                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )

}

export default Products;