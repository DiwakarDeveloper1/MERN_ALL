import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const ShowStudent = () => {
  const { students } = useContext(StudentContext);

  return (
    <>
      <Container>
        <Typography variant='h4' gutterBottom mt={2} color='secondary'>
          Show Students
        </Typography>
        <Grid container spacing={2} rowSpacing={2}>
          {students.map((item) => (
            <>
              <Grid item md={4}>
                <Card
                  variant='outlined'
                  key={item.id}
                  sx={{
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Typography variant='h5'>{item.name}</Typography>
                    <Typography variant='body1'>
                      <strong>Address:</strong> {item.address}
                    </Typography>
                    <Typography variant='body1'>
                      <strong>Phone:</strong>
                      {item.mobile}
                    </Typography>
                    <Typography variant='body1'>
                      <strong>DOB:</strong>
                      {item.dob}
                    </Typography>
                    <Typography variant='body1'>
                      <strong>Gender:</strong>
                      {item.gender}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ShowStudent;
