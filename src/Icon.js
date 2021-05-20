import React from "react";
import "./Icon.css";
import "./Icons/01d.svg";
import "./Icons/01n.svg";
import "./Icons/02d.svg";
import "./Icons/02n.svg";
import "./Icons/03dn.svg";
import "./Icons/05dn.svg";
import "./Icons/06d.svg";
import "./Icons/07dn.svg";
import "./Icons/08dn.svg";
import "./Icons/09dn.svg";

export default function Icon(props) {
  let icon = "";
  if (props.icon === "03d" || props.icon === "03n") {
    icon = "./Icons/03dn.svg"; //scattered clouds day/night
  } else if (props.icon === "04d") {
    icon = "./Icons/03dn.svg"; //broken clouds day
  } else if (props.icon === "04n") {
    icon = "./Icons/03dn.svg"; //broken clouds night
  } else if (props.icon === "01d") {
    icon = "./Icons/01d.svg"; //clear day
  } else if (props.icon === "01n") {
    icon = "./Icons/01n.svg"; //clear night
  } else if (props.icon === "02d") {
    icon = "./Icons/02d.svg"; //partly cloudy day
  } else if (props.icon === "02n") {
    icon = "./Icons/02n.svg"; //partly cloudy night
  } else if (props.icon === "09d") {
    icon = "./Icons/06d.svg"; //showers day
  } else if (props.icon === "09n") {
    icon = "./Icons/07dn.svg"; //showers night
  } else if (props.icon === "10d") {
    icon = "./Icons/07dn.svg"; //mod-heavy rain day
  } else if (props.icon === "10n") {
    icon = "./Icons/07dn.svg"; //rain night
  } else if (props.icon === "11d") {
    icon = "./Icons/08dn.svg"; //thunderstorm day
  } else if (props.icon === "11n") {
    icon = "./Icons/08dn.svg"; //thunderstorm night
  } else if (props.icon === "13d") {
    icon = "./Icons/09dn.svg"; //snow day
  } else if (props.icon === "13n") {
    icon = "./Icons/09dn.svg"; //snow night
  } else if (props.icon === "50d") {
    icon = "./Icons/02d.svg"; //mist day
  } else if (props.icon === "50n") {
    icon = "./Icons/02n.svg"; //mist night
  }

  return <img src={icon} alt="weather-icon" />;
}
