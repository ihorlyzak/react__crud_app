import { Container, Grid, Box } from "@mui/material/";

import { Header } from "./Header";
import { TasksForm } from "./TasksForm";
export const Home = () => {

    return (
        <Container maxWidth="false">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "90vh" }}
            >
                <Box
                    sx={{
                        width: "40vw",
                        minWidth: "180px",                      
                        padding: "5px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center"                      
                    }}
                >

                    <Header />
                    <TasksForm />

                </Box>


            </Grid>
        </Container>
    );
};
