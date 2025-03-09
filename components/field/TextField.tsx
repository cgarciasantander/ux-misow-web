import { Error } from "@mui/icons-material";
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

export function TextField(props: TextFieldProps) {
  function getSlotProps(): TextFieldProps["slotProps"] {
    if (props.error) {
      return {
        ...props.slotProps,
        input: {
          ...props.slotProps?.input,
          endAdornment: <Error color="error" />,
        },
      };
    }

    return props.slotProps;
  }

  return <MuiTextField {...props} slotProps={getSlotProps()} />;
}
