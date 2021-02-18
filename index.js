import { NativeModules } from "react-native";

const { RNReverseGeocode } = NativeModules;

const debounce = (fn, time, ...args) => {
  let timeout;

  return () => {
    const functionCall = () => fn.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

const searchForLocations = (searchText, region, callback, debounceMs = 200) => {
  debounce(
    RNReverseGeocode.searchForLocations(searchText, region, callback),
    debounceMs
  );
};

const SearchForLocations = { searchForLocations };

export default SearchForLocations;
