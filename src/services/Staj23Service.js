import axios from 'axios';

export class Staj23Service {

    async getSampleObjectList() {

        return await axios.get('/staj23/sampleObjectList')
            .then((response) => {
                console.log("SAMPLEE"+JSON.stringify(response.data));
                return response.data;
            })
            .catch((error) => {
                console.log(error.message);
                return [
                    { type: "Sabit Type 1", name: "Sabit Name 1" }
                ];


            });

    }
}
