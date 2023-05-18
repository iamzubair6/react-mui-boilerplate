import { Box } from '@mui/material';
import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
const socialLinks = [
  { name: 'Facebook', icon: BsFacebook, link: '#' },
  {
    name: 'Twitter',
    icon: BsTwitter,
    link: '#',
  },
  {
    name: 'YouTube',
    icon: BsYoutube,
    link: '#',
  },
  {
    name: 'Instagram',
    icon: BsInstagram,
    link: '#',
  },
];

const Footer = () => {
  return (
    <Box>Footer</Box>
    // <Box
    //   sx={{
    //     bgcolor: "primary.main",
    //     pb: { xs: "30px", md: 0 },
    //   }}
    // >
    //   <Container
    //     maxWidth="xl"
    //     sx={{
    //       color: "white.main",
    //       paddingX: { xs: "20px !important", md: "0 !important" },
    //     }}
    //   >
    //     <Typography
    //       variant="h3"
    //       component="h3"
    //       sx={{
    //         color: "white.main",
    //         paddingX: { md: "56px" },
    //         paddingTop: "36px",
    //       }}
    //     >
    //       {localeString.notunAsha}
    //     </Typography>

    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: { xs: "column", md: "row" },
    //         alignItems: { md: "center" },
    //         justifyContent: "space-between",
    //         gap: { xs: "30px", md: "70px" },
    //         paddingX: { md: "50px" },
    //         marginBottom: "30px",
    //         marginTop: { xs: "30px", md: 0 },
    //       }}
    //     >
    //       <NavCategories whiteVariant />
    //       <Box
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "start",
    //           gap: "20px",
    //         }}
    //       >
    //         <Typography variant="body2">
    //           {localeString.forNewsAndOffers}
    //         </Typography>
    //         <TextField
    //           variant="outlined"
    //           size="small"
    //           color="white"
    //           type="email"
    //           placeholder={localeString.emailPlaceholder}
    //           value={emailInput}
    //           onChange={(e) => setEmailInput(e.target.value)}
    //           sx={{
    //             border: "1px solid #fff",
    //             borderRadius: "5px",
    //             "& fieldset": {
    //               border: 0,
    //             },
    //             "& input": {
    //               color: "#fff !important",
    //             },
    //           }}
    //         />
    //         <LoadingButton
    //           loading={isLoading}
    //           onClick={subscriptionMutation}
    //           variant="outlined"
    //           color="white"
    //           sx={{
    //             fontWeight: "700",
    //             fontSize: "14px",
    //             lineHeight: "22px",
    //           }}
    //         >
    //           {localeString.submit}
    //         </LoadingButton>
    //       </Box>
    //     </Box>
    //     <Grid
    //       container
    //       rowSpacing="20px"
    //       sx={{
    //         borderTop: "1px solid #FFF",
    //         borderBottom: "1px solid #FFF",
    //         paddingTop: "17px",
    //         paddingBottom: "27px",
    //       }}
    //     >
    //       <Grid
    //         item
    //         xs={7}
    //         md={3}
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: { md: "center" },
    //           gap: "16px",
    //           borderRight: { md: 1 },
    //         }}
    //       >
    //         <Typography variant="body2">{localeString.emailUs}</Typography>
    //         <Typography variant="body2">notun.asa@gmail.com</Typography>
    //       </Grid>
    //       <Grid
    //         item
    //         xs={5}
    //         md={6}
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: { md: "center" },
    //           gap: "23px",
    //         }}
    //       >
    //         <Typography variant="body2">{localeString.followUs}</Typography>
    //         <Box
    //           sx={{
    //             display: "flex",
    //             gap: { xs: "15px", md: "42px" },
    //           }}
    //         >
    //           {socialLinks.map(({ name, icon: Icon, link }, idx) => {
    //             return (
    //               <MuiLink key={`sociallinks-${idx}`} href={link}>
    //                 <Icon
    //                   style={{
    //                     height: "20px",
    //                     width: "20px",
    //                     color: "#fff",
    //                   }}
    //                 />
    //               </MuiLink>
    //             );
    //           })}
    //         </Box>
    //       </Grid>
    //       <Grid
    //         item
    //         xs={12}
    //         md={3}
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: { md: "center" },
    //           gap: "16px",
    //           borderLeft: { md: 1 },
    //         }}
    //       >
    //         <Typography variant="body2">{localeString.contactUs}</Typography>
    //         <Typography variant="body2">02 55012201-09</Typography>
    //       </Grid>
    //     </Grid>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         justifyContent: "center",
    //         gap: "18.25px",
    //         paddingY: "15px",
    //         borderBottom: "1px solid #FFF",
    //       }}
    //     >
    //       <Typography variant="body2">{localeString.advertise}</Typography>
    //       <Divider
    //         orientation="vertical"
    //         flexItem
    //         sx={{ borderColor: "white" }}
    //       />
    //       <Typography variant="body2">{localeString.termOfUse}</Typography>
    //       <Divider
    //         orientation="vertical"
    //         flexItem
    //         sx={{ borderColor: "white" }}
    //       />
    //       <Typography variant="body2">{localeString.privacyPolicy}</Typography>
    //     </Box>
    //     <Typography
    //       variant="body2"
    //       sx={{ paddingY: "15px", textAlign: "center" }}
    //     >
    //       {localeString.copyright} © 2022 {localeString.notunAsha}.{" "}
    //       {localeString.allRightReserved}.
    //     </Typography>
    //   </Container>
    // </Box>
  );
};

export default Footer;
