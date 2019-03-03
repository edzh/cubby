import React, { useState, useEffect } from 'react';

export default function GMap(props) {
  let map = null;
  useEffect(() => {
    if (window.google) {
      map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 20.644 },
        zoom: 8
      });
    }
  }, []);

  useEffect(() => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=160%20convent%20ave&key=AIzaSyBJEZtr6exkMyZm24BbA19u5e6zO6VR_2g'
    )
      .then(response => response.json())
      .then(data => console.log(data.results[0].geometry.location.lat));
  }, []);

  return <div style={{ height: '720px' }} id="map" />;
}
