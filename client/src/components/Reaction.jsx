import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const drugNames = [
  "Paracetamol",
  "Aspirin",
  "Acetalgin",
  "Ibuprofen",
  "Panadol",
  "Paracetamol",
  "Aspirin",
  "Acetalgin",
  "Ibuprofen",
  "Panadol",
];

export default function MediaCard() {
  return (
    <div className='max-h-lg flex gap-16'>
      {drugNames.map((drugName) => (
        <Card
          className='hover:scale-110 hover:transition hover:duration-500'
          sx={{
            width: { sm: 250, md: 275, lg: 300 },
            height: { sm: 300, md: 325, lg: 350 },
            borderRadius: 4,
          }}>
          <CardHeader
            title={drugName}
            sx={{
              backgroundColor: "#23b38f",
              color: "white",
              ":hover": {
                backgroundColor: "#0e8f8e",
              },
            }}
            subheader='Low Risk'
          />
          <CardContent sx={{ color: "black" }}>
            <Typography variant='body2' color='text.secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              excepturi placeat nostrum cupiditate repudiandae aut, iusto
              corporis eius explicabo impedit esse aliquam unde temporibus quo
              neque incidunt corrupti iure debitis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tempore, possimus quo! Unde id sunt,
              voluptate hic ab sit quam iure obcaecati! Nam cupiditate nisi
              necessitatibus iure vero? Nemo, odio officia.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
