import React, { useEffect, useState } from 'react';
import "./Api.css"

const Api = () => {
    const [userData, setuserData] = useState(null);
    const API = "https://randomuser.me/api/";

    const fetchApi = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log("The received data: ", data);
            // console.log("The first name from data ", data.results[0].name.first);
            setuserData(data.results[0]);

        } catch (error) {
            console.log("Error fetching API:", error);
        }
    };

    useEffect(() => {
        fetchApi(API);
    }, []);

    return (
        <div className="Api-container">
            <h1>Api data fetching</h1>
            <br />
            {userData && (
                <div className="userData">

                    <img src={userData.picture.large} height={250}/>
                    <p> First Name: {userData.name.title} {userData.name.first}</p>
                    <p>Last Name: {userData.name.last}</p>
                    <p>Age : {userData.dob.age}</p>
                    <p>Gender : {userData.gender}</p>
                    <p>Country: {userData.location.country}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone number: {userData.phone}</p>

                </div>
            )}
        </div>
    );
};

export default Api;
