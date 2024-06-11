import {AxiosError} from 'axios';
import {toast} from 'react-toastify';

const handleResponseError = (error: AxiosError) => {
    if (error.response) {
        const {status} = error.response;
        if (status === 404) {
            toast.error('Resource not found (404)');
        } else if (status === 500) {
            toast.error('Internal server error (500)');
        } else if (status >= 400 && status < 500) {
            toast.error(`Client error (${status})`);
        } else if (status >= 500) {
            toast.error(`Server error (${status})`);
        }
    } else if (error.request) {
        toast.error('No response received from server');
    } else {
        toast.error(`Request error: ${error.message}`);
    }
};

export default handleResponseError;