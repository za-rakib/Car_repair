/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);

    // handle changes 
    const handleBlur = (event) => {
        const newBooking = { ...service };
        newBooking[event.target.name] = event.target.value;
        setService(newBooking);
    }
    const handleFileChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }

    // handle submit
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', service.title)
        formData.append(' description', service.description)
        
        // useEffect(() => {
            fetch('http://localhost:5000/addAService', {
                // method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                // body: JSON.stringify(service)
                method: 'POST',
                body: formData
            })
                // .then(res => res.json())
                // .then(success => {
                //     if (success) {

                //         console.log(success);
                //     }
                // })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                            console.error(error)
                         })

        // }, [])
    }

    // const files = event.target.files
    // const formData = new FormData()
    // formData.append('myFile', files[0])

    // fetch('/saveImage', {
    //     method: 'POST',
    //     body: formData
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{}} className="m-4">Add Service</h4>
                    </div>
                    <div className="col-md-6 ">
                        <h4 style={{}} className="text-warning m-4">{ }</h4>
                    </div>
                </div>
                <form onSubmit={handleSubmit} action="" method="POST" style={{ width: '75%', margin: '0 auto' }} className="bg-light m-5 p-5">
                    <input onBlur={handleBlur} type="name" name="name" className="form-control" placeholder="title" required />
                    <br />
                    <textarea onBlur={handleBlur} name="description" className="form-control" placeholder="description" required ></textarea>
                    <br />
                    <input onChange={handleFileChange} type="file" placeholder="Images" />
                    <input type="submit" value="Submit" className="btn btn-warning" />
                </form>
            </div>
        </div>
    );
};

export default AddService;