import React from "react";
import { toast } from "react-toastify";

export const SuccessType = {
    Create: "created",
    Update: "updated",
    Delete: "deleted",
    Sent: "sent",
};

export const success = (resource, type, autoClose = true) => {
    const message = `${resource} was successfully ${type}`;
    toast.success(message, {
        hideProgressBar: false,
        autoClose: autoClose ? 5000 : false,
    });
};

export const successWithCustomMessage = (customMessage, autoClose = true) => {
    const content = customMessage
    toast.success(content, {
        hideProgressBar: false,
        autoClose: autoClose ? 5000 : false,
    });
};

export const notification = (customMessage, autoClose = true) => {
    const content = customMessage
    toast.success(content, {
        hideProgressBar: false,
        position: "top-right",
        autoClose: autoClose ? 5000 : false,
    });
};

export const warn = (message) => {
    toast.warn(message, {
        hideProgressBar: false,
        autoClose: false,
    });
};

export const error = (message, autoClose = true) => {
    toast.error(message, {
        hideProgressBar: false,
        autoClose: autoClose ? 5000 : false,
    });
};

export const errorWithCustomMessage = (customMessage, autoClose = true) => {
    const content = customMessage
    toast.error(content, {
        hideProgressBar: false,
        autoClose: autoClose ? 5000 : false,
    });
};

export const info = (message, autoClose = false) => {
    const content = message
    toast.info(content, {
        hideProgressBar: false,
        autoClose: autoClose ? 5000 : false,
    });
};
