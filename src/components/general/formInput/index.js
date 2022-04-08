import { FormControl, TextField, MenuItem } from "@mui/material";
import "./style.css";
export const FormInput = ({
  type,
  id,
  label,
  multiline,
  selectItems,
  handleChange,
  onErrorOccurd,
  onHelperText,
  value
}) => {
  return (
    <FormControl className="form-group">
      {type === "select" ? (
        <TextField
          id={id}
          label={label}
          type={type}
          className="form-control"
          onChange={handleChange}
          value={value}
          style={{ margin: "15px 0" }}
          select
          multiline={multiline ? true : false}
          variant="outlined"
        >
          {selectItems &&
            selectItems.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      ) : (
        <>
          <TextField
            id={id}
            label={label}
            type={type}
            onChange={handleChange}
            className="form-control"
            error={onErrorOccurd}
            helperText={onHelperText}
            value={value}
            style={{ margin: "15px 0" }}
            multiline={multiline ? true : false}
            variant="outlined"
          />
        </>
      )}
    </FormControl>
  );
};
