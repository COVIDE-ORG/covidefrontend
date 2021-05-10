import axios from "axios";
import BASE_URL from "../constant/baseUrl";
import { addBeds, changeLoading, addMeds, addAmbulance, addOxygen, addPlasma, changeError } from "./action";

export function getResources(resource) {

    return async (dispatch) => {

        const url = BASE_URL + resource;
    
        let resp = await axios.get(url);
    
        if (resp.status === 200) {
            switch (resource) {
                case "beds":
                    dispatch(addBeds(resp.data));
                    break;
                case "meds":
                    dispatch(addMeds(resp.data));
                    break;
                case "ambulance":
                    dispatch(addAmbulance(resp.data));
                    break;
                case "oxygen":
                    dispatch(addOxygen(resp.data));
                    break;
                case "plasma":
                    dispatch(addPlasma(resp.data));
                    break;
                default:
                    break;
            }
            dispatch(changeLoading);
        }
        dispatch(changeLoading());
    }
}