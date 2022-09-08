import { Grid } from "@mui/material";
import { createContext, useContext, useState } from "react";
import { ChartContext } from "./chart.ctx";

/**
 *
 * @param {ChartProps} props
 * @returns
 */
function Charts(props) {
    const values = props.values;
    const [loading, setLoading] = useState(false);

    /** @type {RState<ChartLegend>} */
    const [legends, setLegends] = useState({});

    /** @type {RState<string>} */
    const [model, setModel] = useState(null);

    /** @type {RState<Record<string, boolean>>} */
    const [selected, setSelected] = useState(
        Object.fromEntries(props.columns.map((e) => [e, false]))
    );

    return (
        <ChartContext.Provider
            value={{
                model,
                legends,
                values,
                selected,
                element: chartModel(model, props.data),

                setModel,
                setLegend: (e = {}) => setLegends((t) => ({ ...t, ...e })),
                setSelected: (k, e) =>
                    setSelected((t) => ({ ...t, [k]: e })),
            }}
        >
            <Grid
                container
                direction="column"
                sx={{ ml: "240px", width: "unset" }}
            >
                {props.children}
            </Grid>
        </ChartContext.Provider>
    );
}

export default Charts;

const availableModel = ["pie", null];
function chartModel(model, data, properties) {
    switch (model) {
        case "pie":
            return <PieChart data={data} properties={properties} />;
            
        default:
            return <></>;
    }
}
