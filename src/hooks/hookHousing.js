import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import Logements from "../assets/logements.json"

export function useHousing() {
    const { logementId } = useParams()
    const nav = useNavigate()
    let logement = Logements.find((l) => l.id === logementId)
    useEffect(() => {
        if (logement === undefined) {
            nav("/404");
        }
    }, []);
    return logement
}