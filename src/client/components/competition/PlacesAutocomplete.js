import React, { useState, useEffect } from 'react';

export default function PlacesAutocomplete(props) {
  const [place, setPlace] = useState(null);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  let autocomplete = null;
  let listener = null;

  useEffect(() => {
    if (window.google) {
      autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById('pac-input')
      );
      autocomplete.addListener('place_changed', () => {
        setPlace(autocomplete.getPlace());
      });
    }
  }, []);

  useEffect(() => {
    if (place) {
      setLat(place.geometry.location.lat());
      setLng(place.geometry.location.lng());
      props.setAddress(place.formatted_address);
    }
  }, [place]);

  if (place) {
    console.log(place);
  }

  return <input id="pac-input" type="text" />;
}
