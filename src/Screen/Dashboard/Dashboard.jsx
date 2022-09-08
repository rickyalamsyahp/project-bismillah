import { Fullscreen, FullscreenExit } from "@mui/icons-material";
import { Card, CardContent, Grid } from "@mui/material";
import { ChartContext } from "../../Component/Charts/chart.ctx";
import {
    dummyDataChart,
    dummyDataCols,
    dummyDataValues,
} from "../../Component/Charts/dummy.chart";
import Charts from "../../Component/Charts/index";
import Title from "../../Component/Title";
import "../../Style/home.css";

const models = {};

function Dashboard(props) {
    const gridItemSx = { p: 4, pt: 0 };

    return (
        <Charts
            data={dummyDataChart}
            columns={dummyDataCols}
            values={dummyDataValues}
        >
            <Grid item xs={6} sx={gridItemSx}>
                <Title hideProfile>Data Visualization</Title>
            </Grid>
            <Grid item xs={6} sx={{ ...gridItemSx, p: 2 }}>
                <Grid container spacing={1.5}>
                    <Grid item xs={12} lg={7} sx={{ borderRadius: 2 }}>
                        <Card
                            sx={{
                                p: 0,
                                width: "100%",
                                borderRadius: 2,
                                color: "white",
                                fontSize: ".8rem",
                                backgroundColor: "#02216F",
                            }}
                        >
                            <CardContent sx={{ p: 0, overflow: "hidden" }}>
                                <Grid container>
                                    <Segment title="Fields">test</Segment>
                                    <Segment title="Visualization">
                                        test
                                    </Segment>
                                    <Segment title="Filter">test</Segment>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <ChartContext.Consumer>
                            {(c) => c.element}
                        </ChartContext.Consumer>
                    </Grid>
                </Grid>
            </Grid>
        </Charts>
    );
}

export default Dashboard;

function Segment({ title, children }) {
    return (
        <Grid item xs={4}>
            <div style={toolHeader}>
                <span>
                    <b>{title}</b>
                </span>
            </div>
            <div style={{ backgroundColor: "#02216F", padding: 5 }}>
                {children}
            </div>
        </Grid>
    );
}

const toolHeader = {
    backgroundColor: "#4276c3",
    lineHeight: "2rem",
    textAlign: "center",
    width: "100%",
    fontSize: "0.95rem",
    color: "white",
};

// function Tool() {
//    const icons = [<Fullscreen />, <FullscreenExit />];

//    return (
//       <Card sx={{ p: 0, overflow: "hidden" }}>
//          <CardContent sx={{ p: 1, pb: 0 }}>
//             <Grid
//                container
//                alignContent={"center"}
//                justifyContent={"center"}
//             >
//                {icons.map((e, i) => {
//                   return (
//                      <Grid key={"tool-icon-" + i} item xs={2}>
//                         {e}
//                      </Grid>
//                   );
//                })}
//             </Grid>
//          </CardContent>
//       </Card>
//    );
// }
