import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';


export default function Title({ text, hideProfile = false, children }) {
    return (
        <Grid container justifyContent={"space-between"} alignItems="center" sx={{ height: 64 }}>
            <Grid item>
                <Typography variant="h5" color={"grey"}>{text || children}</Typography>
            </Grid>
            {!hideProfile && <Grid item sx={{ display: "flex", alignItems: "center", flexDirection: "row", gap: 3 }}>
                <Typography variant="p" color={"grey"}>Hi User, Welcome Back</Typography>
                <div style={{ borderRadius: "50%", background: "grey", width: 50, height: 50 }} className="img-profile">
                    {/* Image Profile Here */}
                </div>
            </Grid>}
        </Grid>
    )
}