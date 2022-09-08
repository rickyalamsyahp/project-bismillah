import { createContext, useContext } from "react";

/** @type {React.Context<ChartContext>} */
export const ChartContext = createContext();
export function useChart() {
    return useContext(ChartContext);
}
