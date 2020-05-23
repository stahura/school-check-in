import React from "react"
import Paper from '@material-ui/core/Paper'
import styled from "styled-components"
import Header from "../shared-components/Header"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AppDrawer from "../shared-components/AppDrawer"
import ResponsiveAppDrawer from "../shared-components/ResponsiveAppDrawer"
import "../styles/global.css"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    contentTop : {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplatRows: 'auto',
        gridGap: '5px',
        [theme.breakpoints.down('xs')]: {
           gridTemplatRows: '1fr 1fr',
           gridTemplateColumns: '1fr'
          },
        
    },
    contentTopItem: {
        width: '100%',
    }
    
}))


const StyledPaper = styled(Paper)`
    width: 100%;
    margin: 0 auto;
    margin-top: 5px;
    
`




const Home = () => {
    const classes = useStyles()

    return (

        <div >
            <Header />
            <div className={classes.root}>
                <ResponsiveAppDrawer />
                    <div className={classes.content}>
                        <div className={classes.contentTop}>
                            <div className={classes.contentTopItem}>
                                <StyledPaper elevation={5} >
                                    <div >
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                    </div>
                                </StyledPaper>
                            </div>
                            <div className={classes.contentTopItem}>
                                <StyledPaper elevation={5} >
                                    <div >
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                        <div>Test</div>
                                    </div>
                                </StyledPaper>

                            </div>
                        </div>
                        <StyledPaper elevation={5}>
                            <div >
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                                    <div>Test</div>
                            </div>
                        </StyledPaper>
                    </div>
                </div>
        </div>
    )
}

export default Home