import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ReactPath from "../../lib/ReactPath";

const useStyles = makeStyles(theme => ({
    root: {
        height: 380,
        transform: 'translateZ(0px)',
        flexGrow: 1,
    },
    speedDial: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    tooltipAction: {
        width: "9rem"
    }
}));


function CreatePlaylist(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleVisibility = () => {
        setHidden(prevHidden => !prevHidden);
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleRouteChange = (path) => {
        let props = props;
        return () => {
            ReactPath.navigateTo(props, path);
        }
    };

    return (
        <div className={classes.root}>
            {/*<Button onClick={handleVisibility}>Toggle Speed Dial</Button>*/}
            {/*<Backdrop open={open}/>*/}
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                className={classes.speedDial}
                hidden={hidden}
                icon={<SpeedDialIcon/>}
                // onClose={handleClose}
                onClick={handleOpen}
                open={open}
            >
                <SpeedDialAction
                    key={"Scribble Pad"}
                    icon={<FileCopyIcon/>}
                    // className={classes.tooltipAction}
                    TooltipClasses={classes.tooltipAction}
                    tooltipTitle={<div className={classes.tooltipAction}>{"Scribble Pad"}</div>}
                    tooltipOpen
                    onClick={()=>{ReactPath.navigateTo(props,ReactPath.scribble)}}
                />

                <SpeedDialAction
                    key={'Screen Record'}
                    icon={<SaveIcon/>}
                    // className={classes.tooltipAction}
                    TooltipClasses={classes.tooltipAction}
                    tooltipTitle={<div className={classes.tooltipAction}>{'Screen Record'}</div>}
                    tooltipOpen
                    onClick={()=>{ReactPath.navigateTo(props,ReactPath.screenRecord)}}
                />

                <SpeedDialAction
                    key={'Webcam Recording'}
                    icon={<PrintIcon/>}
                    // className={classes.tooltipAction}
                    TooltipClasses={classes.tooltipAction}
                    tooltipTitle={<div className={classes.tooltipAction}>{"Webcam Recording"}</div>}
                    tooltipOpen
                    onClick={()=>{ReactPath.navigateTo(props,ReactPath.webcam)}}
                />
            </SpeedDial>
        </div>
    );
}


export default CreatePlaylist