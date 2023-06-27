import React from 'react';
import { Alert } from "@mui/material";

interface Props {
    isError : boolean,
    errors : string[],
}

const ErrorAlert : React.FC<Props> = ({isError,errors}) => {
  return (
    <>
    {isError ? (
        <Alert severity="error">
            {errors.map((message) => <div key={message}>{message}</div>)}
        </Alert>
    ) : null}
    </>
  );
}

export default ErrorAlert;
