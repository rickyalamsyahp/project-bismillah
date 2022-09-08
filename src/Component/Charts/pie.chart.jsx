import { ResponsivePie } from "@nivo/pie";
import { useEffect, useMemo } from "react";
import { ChartContext } from "./chart.ctx";

export default function PieChart({ data }) {
    const matches = useMemo(() => new Set(), []);

    return (
        <ChartContext.Consumer>
            {(c) => {
                const legn = c.legend;
                const keyValue = c.values[legn.key];

                useEffect(() => {
                    keyValue.forEach((e) => matches.add(e));
                    return () => matches.clear();
                }, [key]);

                return (
                    <ResponsivePie
                        data={data}
                        fill={[...matches].map((e) => {
                            return {
                                id: randomFill(),
                                match: { [legn.key]: e },
                            };
                        })}
                        defs={[
                            {
                                id: "dots",
                                type: "patternDots",
                                background: "inherit",
                                color: "rgba(255, 255, 255, 0.3)",
                                size: 4,
                                padding: 1,
                                stagger: true,
                            },
                            {
                                id: "lines",
                                type: "patternLines",
                                background: "inherit",
                                color: "rgba(255, 255, 255, 0.3)",
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10,
                            },
                        ]}
                    />
                );
            }}
        </ChartContext.Consumer>
    );
}

const rand = () => Math.random();
const floor = (n = Math.floor()) => Math.floor(n);
const randomColor = () =>
    `hsl(${rand() * 360}, ${floor(rand() * 101)}%, ${floor(
        rand() * 101
    )})`;
const randomFill = () => {
    const r = floor(rand() * 3);
    return r === 0 ? undefined : r === 1 ? "dots" : "lines";
};
