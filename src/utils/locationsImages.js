import imageCafe from '../location-image/cafe.png';
import imageEducation from '../location-image/education.png';
import imageHealth from '../location-image/health.png';
import imagePark from '../location-image/park.png';
import imageShoping from '../location-image/shoping.png';
import imageSport from '../location-image/sport.png';
import imageTransport from '../location-image/transport.png';
import { v4 as uuidv4 } from 'uuid';


export const locationImages = [
    {
        id:uuidv4(),
        url:imageShoping
    },
    {
        id:uuidv4(),
        url:imageSport
    },
    {
        id:uuidv4(),
        url:imagePark
    },
    {
        id:uuidv4(),
        url:imageHealth
    },
    {
        id:uuidv4(),
        url:imageCafe
    },
    {
        id:uuidv4(),
        url:imageShoping
    },
    {
        id:uuidv4(),
        url:imageTransport
    },
    {
        id:uuidv4(),
        url:imageEducation
    },
]