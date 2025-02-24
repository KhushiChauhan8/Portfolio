// import React from "react";
// import { certificatesData } from "../data/certificates";
// import Certificate from "./Certificate";
// import { Box, Grid } from "@mui/material";

// const CertificatesList = () => {
//   return (
//     <Box sx={{ padding: 4 }}>
//       <Grid container spacing={3}>
//         {certificatesData.map((cert) => (
//           <Grid item xs={12} sm={6} md={4} key={cert.id}>
//             <Certificate Img={cert.Img} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default CertificatesList;


import React from "react";
import { certificatesData } from "../data/certificates"; // Ensure correct path
import Certificate from "./Certificate";
import { Box, Grid } from "@mui/material";

const CertificatesList = () => {
  console.log("Certificates Data:", certificatesData); // 👈 Debugging step

  if (!certificatesData || certificatesData.length === 0) {
    console.log("No certificates found!"); // 👈 Checking if data is empty or undefined
    return <h2>No Certificates Available</h2>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={3}>
        {certificatesData.map((cert) => (
          <Grid item xs={12} sm={6} md={4} key={cert.id}>
            <Certificate Img={cert.Img} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CertificatesList;
