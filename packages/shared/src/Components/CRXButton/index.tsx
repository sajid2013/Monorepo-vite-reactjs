import * as React from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./CRXButton.scss";

interface buttonProps {
  id?: string;
  children?: React.ReactNode;
  onClick?: (e: any, value?: any) => void;
  color?: "default" | "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
  className?: string;
  disabled?: boolean;
  primary?: boolean;
  dataTarget? : string
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#ffffff",
    },
  },
 
});

const CRXButton = ({
  id,
  children,
  color,
  variant,
  className,
  disabled,
  onClick,
  primary,
  dataTarget,
  ...props
}: buttonProps) => {
  const disabledClass = className === "tertiary" && disabled && "tertiaryDisabled"
  return (
    <ThemeProvider theme={theme}>
      <Button
        style={{ background: 'transparent' }}
        id={id}
        
        variant={variant || "outlined"}
        className={`CRXButton ${className} ` + color + " " + disabledClass}
        onClick={onClick}
        disabled={disabled}
        disableRipple={true}
        data-target={dataTarget}
        {...props}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default CRXButton;
