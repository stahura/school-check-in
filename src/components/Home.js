import React from "react"
import Paper from '@material-ui/core/Paper'
import styled from "styled-components"
import Header from "../shared-components/Header"
import { makeStyles } from '@material-ui/core/styles'
import ResponsiveAppDrawer from "../shared-components/ResponsiveAppDrawer"
import "../styles/global.css"
import MaterialTableDemo from "../shared-components/Datatable"
import EnhancedTable from "../shared-components/GroupTable"
import CheckedInTable from "../components/CheckedInTable"



const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '100px',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: '40px',
        [theme.breakpoints.down('sm')]: {
            width: '60%'
        },
    },
    contentTop: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplatRows: 'auto',
        gridGap: '5px',
        [theme.breakpoints.down('sm')]: {
            gridTemplatRows: '1fr 1fr',
            gridTemplateColumns: '1fr',
            width: '90%',
            margin: '0 auto'
        },
    },
    contentTopItem: {
        width: '100%',
        height: '200px'
    },
    bigNumber: {
        fontSize: '60px',
        textAlign: 'center',
        top: '55%',
        margin: '0'
    },
    contentHeader: {
        textAlign: 'center'
    },
    topPaper: {
        height: '100%'
    },
    contentBottom: {
        marginTop: '25px',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: '0 auto',
            marginTop: '2px'
        },
        maxHeight: '300px'
    }

}))


const StyledPaper = styled(Paper)`
    width: 100%;
    margin: 0 auto;
    marginTop: 0
    
`




const Home = (props) => {
    const classes = useStyles()

    return (

        <div >

            <div className={classes.root}>
                <ResponsiveAppDrawer  />
                <CheckedInTable students={props.students    } />
            </div>
        </div>
    )
}

export default Home

/*
 <div className={classes.content}>
                    <div className={classes.contentTop}>
                        <div className={classes.contentTopItem}>
                            <StyledPaper className={classes.topPaper} elevation={5} >
                                <h2 className={classes.contentHeader}>Recent Notes</h2>
                                <div >
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
                            <StyledPaper className={classes.topPaper} elevation={5} >
                                <h2 className={classes.contentHeader}>Number Checked In</h2>
                                <p className={classes.bigNumber}>
                                    5
                                    </p>
                            </StyledPaper>

                        </div>
                    </div>
                    <div className={classes.contentBottom}>
                        <StyledPaper elevation={5}>

                            <div >
                                <EnhancedTable checkbox={false} />
                            </div>
                        </StyledPaper>
                    </div>
                </div>
*/