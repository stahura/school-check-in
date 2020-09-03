import React,{useState} from "react"
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
    

}))

const Home = (props) => {

    const classes = useStyles()
    const [tableKey, setTableKey] = useState(0)
    
    const reRenderTable = () => {
        setTableKey(tableKey + 1)
    }

    const sortTable = () => {
        let tempStudents = props.students;
        tempStudents = [{firstName: 'Donald',lastName: 'Trump'}]
        props.setStudents(tempStudents)
        reRenderTable()
    }

    return (

        <div >
            <div className={classes.root}>
                <ResponsiveAppDrawer  />
                <CheckedInTable checkedInStudents={props.checkedInStudents} key={tableKey} sortTable={sortTable} students={props.students    } />
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