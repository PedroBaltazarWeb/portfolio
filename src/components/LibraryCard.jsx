import * as React from "react"
import { Container, Box, Typography } from "@mui/material"
import theme from '../../themes/mui-theme'
import "@fontsource/caveat";
import "@fontsource/concert-one";

{/* <style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 600;
  font-style: normal;
  color: #404040;
  background: #0B1231;
}


</style> */}

const LibraryCard = () => {

    const useStyles = {
        root:{
            '&.MuiBox-root': {
                '&.notepaper':{
                    position: 'relative',
                    margin: '40px auto',
                    padding: '29px 0 20px 0',
                    width: '650px',
                    lineHeight: '30px',
                    color: '#0c5777',
                    backgroundColor: '#d6ebf3',
                    backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.7), rgba(0, 85, 255, 0.1) 90%)',
                    border: '1px solid rgba(52, 77, 128, 0.7)',
                    boxShadow:
                        'inset 0 0px rgba(255, 255, 255, 0.5), inset 0 0 5px #557cae, 0 0 1px rgba(0, 0, 0, 0.1), 0 2px rgba(0, 0, 0, 0.02)',
                    boxSizing: 'border-box',
                    fontFamily: '"Caveat", cursive',
                    fontOpticalSizing: 'auto',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    '&:before, &:after':{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        bottom: 0
                    },
                    '&:before': {
                        left: 0,
                        width: 102,
                        border: 'solid #9eb2da',
                        borderColor: 'rgba(158, 178, 218, 0.9)',
                        borderWidth: '0 1px',
                    },
                    '&::after': {
                        zIndex: -1,
                        left: 0,
                        right: 0,
                        background: 'rgb(224, 240, 246, 0.9)',
                        border: '1px solid rgba(158, 178, 218, 0.7)',
                        transform: 'rotate(2deg)'
                    }
                },
                '&.title-sections, &.title-sections-h2':{
                    display: 'flex',
                    fontFamily: '"Concert One", sans-serif',
                    fontSize: 20,
                    borderBottom: '1px solid #9eb2da',
                    borderBottomColor: 'rgba(158, 178, 218, 0.7)',
                    borderTop: '1px solid #9eb2da',
                    borderTopColor: 'rgba(158, 178, 218, 0.7)'
                },
                '&.title-sections': {
                    marginBottom: '4px',
                    '& h1':{
                        padding: theme.spacing(2),
                    },
                    '& .instructions-title':{
                        paddingLeft: "45px"
                    }
                },
                '&.title-sections-h2':{
                    '& h2:last-of-type, & h1:last-of-type':{
                        flexGrow: 1,
                        textAlign: 'center'
                    },
                    '& h2, & h1':{
                        padding: theme.spacing(2),
                    },

                  
                },
                '& .list': {
                    paddingLeft: '60px',
                    marginTop: '0px',
                    fontSize: '20px'
                },
                '&.list-section': {
                    backgroundImage: '-webkit-repeating-linear-gradient(top, transparent, transparent 29px, rgba(158, 178, 218, 0.7) 29px, rgba(158, 178, 218, 0.7) 30px)'
                },
                'li':{
                    padding: '0px 64px',
                }
        }
        
      }}

    return (
    <Box component="article" sx={useStyles.root} className="notepaper">
        <Box component="section" sx={useStyles.root} className="title-sections">
            <Typography component="h1" variant="noteTitle">
                TITLE
            </Typography>
            <Typography variant="noteText" className="instructions-title">
                Instructions to make the FEM with a mobile phone in the Lung Function module!
            </Typography>
        </Box>

        <Box component="section" sx={useStyles.root} className="title-sections-h2">
            <Typography component="h2" variant="noteTitle" >
                NUMBER
            </Typography>
            <Typography component="h2" variant="noteTitle">
                TASK
            </Typography>
        </Box>

        <Box component="section" sx={useStyles.root} className="list-section">
            <Box component="ol" className="list">
                <li>
                    Hold the smartphone or tablet at arm's length with your elbow slightly bent;
                </li>
                <li>
                    Start recording by pressing the record button (if the device's sound is activate, you will hear a beep);
                </li>
                <li>
                    Inhale quickly and fully to full lung capacity;
                </li>
                <li>
                    Keeping your mouth open, exhale with maximum force, without hesitation and as long as possible;
                </li>
                <li>
                    The registration will end automatically after the preset time (if the device sound is activated, you will hear a beep).
                </li>
            </Box>
        </Box>
   
   

   
 

    </Box>
    )
}

export default LibraryCard