import React from "react"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '150px',
        textAlign: 'center'
    },

}))


const HomeScreen = () => {
    const classes = useStyles()

    return(
        <div className={classes.root}>This is the homescreen</div>
    )
}

export default HomeScreen