import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./Autocomplete.css";

const Autocomplete = ({setLocation, setTown, setCountry}) => {
  const [address, setAddress] = useState("");
  
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setLocation(latLng)
    setTown(results[0]?.address_components?.filter(a => a.types[0].toString() === 'neighborhood')[0]?.long_name)
    setCountry(results[0]?.address_components.filter(a => a.types[0].toString() === 'country')[0]?.long_name)
    setAddress(value);
  };

  const searchOptions = {
    componentRestrictions: { country: ['sg'] }
  }

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
      searchOptions={searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div style={{ margin: "0 auto" }}>
          <input
            id="input-field"
            {...getInputProps({ placeholder: "Key in Address or Postal Code" })}
          />

          <div
            style={{
              fontFamily: "mulish, arial",
              fontSize: "14px",
              textAlign: "left",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {loading ? <div>...loading</div> : null}

            {suggestions.map((suggestion) => {
              const style = suggestion.active
                ? { backgroundColor: "#4f6d7a", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    style,
                  })}
                >
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default Autocomplete;
