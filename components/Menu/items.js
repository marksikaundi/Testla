import { faCog, faToolbox, faFan, faKey, faUnlockAlt, faMusic, faChevronRight, faClock, faThermometerHalf, faCar, faBolt, faMapMarkerAlt, faShoppingBag, faWrench, faExclamationTriangle, faUser} from '@fortawesome/free-solid-svg-icons';

const items = [
    {
      id: 1,
      icon: faMusic,
      title: "Media",
    },
    {
      id: 2,
      icon: faClock,
      title: "Software Updates",
      subTitle: "Approximate time to install: 45 min"
    },
    {
      id: 3,
      icon: faThermometerHalf,
      title: "Weather Now",
      subTitle: "22°C"
    },
    {
      id: 4,
      icon: faCar,
      title: "Controls",
    },
    {
      id: 5,
      icon: faBolt,
      title: "Charging",
      subTitle: "Battery Full"
    },
    {
      id: 6, 
      icon: faMapMarkerAlt, 
      title: "Location ",
      subTitle: "Lusaka, Zambia"
    },    
    {
      id: 7, 
      icon: faShoppingBag, 
      title: "Upgrades "
    },        
    {
      id: 8, 
      icon: faKey, 
      title: "Phone Key ",
      subTitle: "Disconnected"
    },        
    {
      id: 9, 
      icon: faUser, 
      title: "Software Owner ",
      subTitle: "Mark Sikaundi"
    },        
    {
      id: 11, 
      icon: faExclamationTriangle, 
      title: "Roadside assistance "
    },        
];

export default items;