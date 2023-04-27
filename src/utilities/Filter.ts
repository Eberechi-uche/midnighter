import { Data } from "@/pages";
import { filter } from "@chakra-ui/react";
type FilterData = {
  filterValue: Data[];
};

const Filter = (option: string[], searchArray: Data[]) => {
  let filtered: Data[] = [];
  option.forEach((item) => {
    if (item === "Full greenhouse") {
      fullGreenHouse(searchArray, filtered);
    } else if (item === "Perfect Ramen") {
      perfectRamen(searchArray, filtered);
    } else if (item === "Brutalist Space") {
      BrutalistSpace(searchArray, filtered);
    } else if (item === "Full Underpass") {
      fullUnderpass(searchArray, filtered);
    } else if (item === "The Real hidden denza") {
      realHiddenDenza(searchArray, filtered);
    } else if (item === "Full Convience Store") {
      fullConvenienceStore(searchArray, filtered);
    } else if (item === "Water Elements") {
      waterElement(searchArray, filtered);
    } else if (item === "Cat's Dinner Bowl") {
      catsBowl(searchArray, filtered);
    } else if (item === "Triple Pets") {
      TriplePets(searchArray, filtered);
    } else if (item === "Public Transport") {
      publicTransport(searchArray, filtered);
    } else if (item === "Tropical") {
      Tropical(searchArray, filtered);
    }
  });
  return filtered;
};

const fullGreenHouse = (array: Data[], filter: Data[]) => {
  let greenHouse = array.filter((Element: Data) => {
    return (
      Element.attributes.Architecture === "Greenhouse" &&
      Element.attributes.Interior === "Overgrown"
    );
  });
  greenHouse.forEach((item) => {
    filter.push(item);
  });
};
const perfectRamen = (array: Data[], filter: Data[]) => {
  let perfectRamen = array.filter((Element: Data) => {
    return (
      Element.attributes.Architecture === "Japanese Traditional" &&
      Element.attributes.Interior === "Ramen Shop" &&
      Element.attributes.Decoration === "Pork Noodles"
    );
  });
  perfectRamen.forEach((item) => {
    filter.push(item);
  });
};
const BrutalistSpace = (array: Data[], filter: Data[]) => {
  let BrutalistSpace = array.filter((Element: Data) => {
    return (
      Element.attributes.Architecture === "Modern" &&
      Element.attributes.Interior === "Space"
    );
  });
  BrutalistSpace.forEach((item) => {
    filter.push(item);
  });
};
const fullUnderpass = (array: Data[], filter: Data[]) => {
  let fullUnderpass = array.filter((Element: Data) => {
    return (
      Element.attributes.Architecture === "Tokyo Street" &&
      Element.attributes.Midground === "Industrial" &&
      Element.attributes.Background === "Highway"
    );
  });
  fullUnderpass.forEach((item) => {
    filter.push(item);
  });
};
const realHiddenDenza = (array: Data[], filter: Data[]) => {
  let realHiddenDenza = array.filter((Element: Data) => {
    return Element.attributes.Architecture === "concrete denza";
  });
  realHiddenDenza.forEach((item) => {
    filter.push(item);
  });
};
const fullConvenienceStore = (array: Data[], filter: Data[]) => {
  let ConvienceStore = array.filter((Element: Data) => {
    return (
      Element.attributes.Interior === "Midnight Breeze Shop" &&
      Element.attributes.Architecture === "Convenience Store" &&
      Element.attributes.Decoration === "GM Shop"
    );
  });
  ConvienceStore.forEach((item) => {
    filter.push(item);
  });
};
const waterElement = (array: Data[], filter: Data[]) => {
  let waterElement = array.filter((Element: Data) => {
    return (
      Element.attributes.Interior === "Fish Bowl" &&
      Element.attributes.Architecture === "Concrete Wave" &&
      (Element.attributes.Background === "Beach" ||
        Element.attributes.Background === "Island Sea")
    );
  });
  waterElement.forEach((item) => {
    filter.push(item);
  });
};
const catsBowl = (array: Data[], filter: Data[]) => {
  let catsBowl = array.filter((Element: Data) => {
    return (
      Element.attributes.Interior === "Fish Bowl" &&
      Element.attributes["Sky Element"] === "Cat Kami"
    );
  });
  catsBowl.forEach((item) => {
    filter.push(item);
  });
};
const TriplePets = (array: Data[], filter: Data[]) => {
  let TriplePets = array.filter((Element: Data) => {
    return (
      Element.attributes.Interior === "Tatami Shiba Cat" &&
      (Element.attributes.Character === "Bus Stop" ||
        Element.attributes.Character === "Samu Frogs")
    );
  });
  TriplePets.forEach((item) => {
    filter.push(item);
  });
};
const publicTransport = (array: Data[], filter: Data[]) => {
  let publicTransport = array.filter((Element: Data) => {
    return (
      Element.attributes.Foreground === "Train Light" &&
      Element.attributes.Character === "Bus Stop"
    );
  });
  publicTransport.forEach((item) => {
    filter.push(item);
  });
};
const Tropical = (array: Data[], filter: Data[]) => {
  let tropical = array.filter((Element: Data) => {
    return (
      Element.attributes.Midground === "Palms" &&
      (Element.attributes.Background === "Beach" ||
        Element.attributes.Background === "Island Sea")
    );
  });
  tropical.forEach((item) => {
    filter.push(item);
  });
};

export default Filter;
