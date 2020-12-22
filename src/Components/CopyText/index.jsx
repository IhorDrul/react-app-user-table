import {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {useCopyToClipboard} from 'react-use'
import Box from '@material-ui/core/Box'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import { ClickAwayListener } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        cursor: 'pointer'
    },
    icon: {
        marginRight: '5px'
    }
})

export const CopyToClipboardText = ({text}) => {
    const [state, copyToClipboard] = useCopyToClipboard()
    const classes = useStyles()
    const [statusCopy, setStatusCopy] = useState('copy')
    const tooltipTitle = () => {
        switch (statusCopy) {
            case 'copy':
                return 'Copy'
            case 'copied':
                return 'Copied'
            default:
                return ''
        }
    }
    const onClickCopy = useCallback(() => {
        copyToClipboard(text)
        setStatusCopy('copied')
    },[copyToClipboard,text])
    const onMouseLeaveCopy = useCallback(() =>{
        setStatusCopy('copy')
    },[setStatusCopy])
    return <ClickAwayListener onClickAway={onMouseLeaveCopy}>
        <Tooltip title={tooltipTitle()} placement={'top'}>
            <Box display = 'flex'
                 alignItems = 'center'
                 className = {classes.root}
                 onClick={onClickCopy}
            >
                <FileCopyIcon fontSize = 'small' className = {classes.icon}/>
                {text}
            </Box>
        </Tooltip>
        </ClickAwayListener>

}

CopyToClipboardText.propTypes = {
    text: PropTypes.string.isRequired
}
