import React, {useEffect, useState} from "react";
import {Staj23Service} from "../services/Staj23Service.js";


const SampleObjectsTable = () => {

    const [sampleObjects, setSampleObjects] = useState(  [{ type: "Sabit Type 1", name: "Sabit Name 1" }]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const staj23Service = new Staj23Service();
                const data = await staj23Service.getSampleObjectList();
                setSampleObjects(data);
            } catch (error) {
                console.error("Hata oluştu:", error);
            }
        };

        fetchData();
    }, []);


    return (
    <table>
      <thead>
        <tr>
          <th>Örnek Type</th>
          <th>Örnek Name</th>
        </tr>
      </thead>
      <tbody>
        {sampleObjects.map((item, index) => (
          <tr key={index}>
            <td>{item.type}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SampleObjectsTable;
