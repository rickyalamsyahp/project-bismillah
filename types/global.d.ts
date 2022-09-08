import React, { ReactNode } from "react";

declare global {
    type RState<T> = [T, React.Dispatch<React.SetStateAction<T>>];

    interface ChartProps {
        data: any[];
        columns: string[];
        values: Record<string, any[]>;
    }

    interface ChartContext {
        model: string | null;
        readonly element: ReactNode;
        legend: ChartLegend;
        selected: Record<string, boolean>;
        values: Record<string, any[]>;

        setModel(k: string | null): void;
        setLegend(o: Partial<ChartLegend>): void;
        setSelected(k: string, enable: boolean): void;
    }

    interface ChartLegend {
        key: string;
        /** other keys */
        value: string[];
    }
}
