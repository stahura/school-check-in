import React,{useState} from "react"

import { makeStyles } from '@material-ui/core/styles'
import ResponsiveAppDrawer from "../shared-components/ResponsiveAppDrawer"
import "../styles/global.css"
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

