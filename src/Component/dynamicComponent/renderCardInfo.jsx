import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const KeysToComponentMap = {
  card: Card,
  img: CardImg,
  text: CardText,
  body: CardBody,
  title: CardTitle,
  subtitle: CardSubtitle,
  button: Button
};

const rendererCardInfo = (config) => {
  if (typeof KeysToComponentMap[config.component] !== "undefined") {
    
    return React.createElement(
      KeysToComponentMap[config.component],{
        src: config.src,
        key: config.key
      },
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map(c => rendererCardInfo(c)))
    );
  }
}

export default rendererCardInfo;

  