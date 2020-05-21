import React from "react"
import Paper from '@material-ui/core/Paper'
import styled from "styled-components"
import Header from "../shared-components/Header"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        width: '85%',
        margin: '0 auto',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: '20px',
        paddingBottom: '10px'
        
    },
    subContainer: {
        display: 'flex',
        width: '49%',
    },
    largeSubContainer: {
        display: 'flex',
        width: '99%',
    },
    test: {
        width:'48%'
    }

})

const StyledPaper = styled(Paper)`
    width: 100%;
    margin: 0 auto;
    margin-top: 5px;
    
`




const Home = () => {
    const classes = useStyles()

    return (

        <div>
            <Header />
            <div className={classes.container}>
                <div className={classes.subContainer}>
                    <StyledPaper elevation={20} >
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
                <div className={classes.subContainer}>
                    <StyledPaper elevation={20} >
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
            <div className={classes.container}>
                <div className={classes.largeSubContainer}>
                    <StyledPaper elevation={20}>
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