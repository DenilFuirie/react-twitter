import React from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import {useStylesSignIn} from "../../pages/SignIn";

interface ModalBlockProps {
    title: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visible?: boolean;
    onClose: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
    title,
    onClose,
    visible = false,
    children,
    }): React.ReactElement | null => {
        if(!visible) {
            return null
    }

    return (
        <Dialog open={visible} onClose={onClose}>
            <DialogTitle id="form-dialog-title">
                <IconButton
                    color="secondary"
                    aria-label="close"
                    onClick={onClose}
                > <CloseIcon style={{fontSize: 26}}/></IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
};

export default Dialog;