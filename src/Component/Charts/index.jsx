import { createContext, useContext } from "react";


function Charts(props) {

    return <></>
}

export default Charts;

export const ChartContext = createContext();
export function useChart() {
    return useContext(ChartContext);
}