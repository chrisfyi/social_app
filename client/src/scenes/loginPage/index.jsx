import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"
import Form from "./Form"


const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(mid-width: 1000px");
  return (
    <Box>
      <Box width="100%"
         backgroundColor={theme.palette.background.alt}>
      <Typography
        fontWeight="bold"
        fontSize="32px"
        color="primary"
      > NewSocial
      </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor= {theme.palette.background.alt}
        >
          <Typography
            fontWeight="500" 
            variant="h5"
            sx={{ mb: "1.5rem"}}>
          Welcome to NewSocial, a new social media!
          </Typography>
          <Form />
      </Box>
    </Box>
  )
}
export default LoginPage