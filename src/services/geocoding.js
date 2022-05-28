import Geocode from "react-geocode";

// set response language. Defaults to english.
Geocode.setLanguage("pt-br");
Geocode.setApiKey("AIzaSyCJ1n8Jbr-fezf8eGSHbViamlfkAkJu648");


// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("br");

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");

// Enable or disable logs. Its optional.
Geocode.enableDebug();



// Get formatted address, city, state, country from latitude & longitude when
// Geocode.setLocationType("ROOFTOP") enabled
// the below parser will work for most of the countries
export async function getCity(lat, lon) {

    const response = await Geocode.fromLatLng(lat, lon);
    //const state = response.results[0].address_components[3].short_name;

    let city, state, country;
    for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
            switch (response.results[0].address_components[i].types[j]) {
                case "locality":
                    city = response.results[0].address_components[i].long_name;
                    break;
                case "administrative_area_level_1":
                    state = response.results[0].address_components[i].short_name;
                    break;
                case "country":
                    country = response.results[0].address_components[i].long_name;
                    break;
                default:
                    break;
            }
        }
    }

    return {
        state
    }

    // Geocode.fromLatLng(lat, lon).then(
    //     (response) => {
    //         const address = response.results[0].formatted_address;
    //         let city, state, country;
    //         for (let i = 0; i < response.results[0].address_components.length; i++) {
    //             for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
    //                 switch (response.results[0].address_components[i].types[j]) {
    //                     case "locality":
    //                         city = response.results[0].address_components[i].long_name;
    //                         break;
    //                     case "administrative_area_level_1":
    //                         state = response.results[0].address_components[i].long_name;
    //                         break;
    //                     case "country":
    //                         country = response.results[0].address_components[i].long_name;
    //                         break;
    //                     default:
    //                         break;
    //                 }
    //             }
    //         }
    //         console.log(city, state, country);
    //         console.log(address);
    //     },
    //     (error) => {
    //         console.error(error);
    //     }
    // );
}

