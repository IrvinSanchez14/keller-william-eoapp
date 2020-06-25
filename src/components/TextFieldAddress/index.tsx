import PlacesAutocomplete from 'react-places-autocomplete';
import { MenuItem, Typography, Paper } from '@material-ui/core';
import { useField } from 'formik';
import { useStyles } from './styles';

interface Props {
  className?: string;
  placeholder: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  disabled?: boolean;
  searchTypes?: string[];
}

const TextFieldAddress: React.FC<Props> = (Props) => {
  const { className, placeholder, onBlur, value, type, disabled, searchTypes, ...rest } = Props;
  const field = useField('streetAddress');
  const classes = useStyles();
  return (
    <PlacesAutocomplete
      searchOptions={{
        types: searchTypes,
        componentRestrictions: {
          country: ['us'],
        },
      }}
      value={value}
      onChange={(val) => field[2].setValue(val)}
      onSelect={(address) => field[2].setValue(address)}
    >
      {(propsPlaces: any) => {
        const { getInputProps, suggestions, getSuggestionItemProps } = propsPlaces;
        return (
          <div>
            <input
              {...getInputProps({
                ...rest,
                placeholder,
                onBlur,
                type,
                disabled,
                className,
              })}
            />
            {!!suggestions.length && (
              <Paper className={classes.list}>
                {suggestions.map((suggestion: any, i: any) => {
                  const splittedAddress = suggestion.description.split(',');
                  const cityWithoutUSASuffix = `${splittedAddress[0]},${splittedAddress[1]}`;
                  return (
                    <MenuItem key={i} {...getSuggestionItemProps(suggestion)}>
                      <Typography>{cityWithoutUSASuffix}</Typography>
                    </MenuItem>
                  );
                })}
              </Paper>
            )}
          </div>
        );
      }}
    </PlacesAutocomplete>
  );
};

export default TextFieldAddress;
