import { toast } from "react-toastify"

export const successMessage = (message) => {
    toast.success(message, {
        position: "bottom-right",
        closeButton: false,
        rtl: true
    });
}

export const errorMessage = (message) => {
    toast.error(message, {
        position: "bottom-right",
        closeButton: false,
        rtl: true
    });
}

export const warningMessage = (message) => {
    toast.warn(message, {
        position: "bottom-right",
        closeButton: false,
        rtl: true
    });
}