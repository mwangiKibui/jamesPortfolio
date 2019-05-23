import image_1 from './images/background_image.jpg';
import image_2 from './images/bg2.jpg';
import image_3 from './images/bg3.jpg';
import image_4 from './images/the_light.png';


const date_today = `${new Date()}`;

const services = [
    {
        sys:{
            id:1
        },
        fields:{
            serviceIcon:"fas fa-facebook",
            service:"Network Installation",
            serviceDesc:"the quick brown fox jumped over the lazy dog"
        }
    },
    {
        sys:{
            id:2
        },
        fields:{
            serviceIcon:"fas fa-twitter",
            service:"Penetration Testing",
            serviceDesc:"the quick brown fox jumped over the lazy dog"
        }
    },
    {
        sys:{
            id:3
        },
        fields:{
            serviceIcon:"fas fa-instagram",
            service:"network configurations",
            serviceDesc:"the quick brown fox jumped over the lazy dog"
        }
    },
    {
        sys:{
            id:4
        },
        fields:{
            serviceIcon:"fas fa-telegram",
            service:"user interface design",
            serviceDesc:"the quick brown fox jumped over the lazy dog"
        }
    }
]
    


const blog = [
    {
        sys:{
            id:11
        },
        fields:{
             blogHeading:" 5 reasons to use ethernet",
             blogViews:"0",
             writer:"James Bond",
             blogImage:{
                 fields:{
                     file:{
                         url:image_1
                     }
                 }
             }
        }
    
    },
    {
        sys:{
            id:12
        },
        fields:{
             blogHeading:"top 10 network providers for you",
             blogViews:"0",
             writer:"milly joseph",
             blogImage:{
                 fields:{
                     file:{
                         url:image_2
                     }
                 }
             }
        }
    },
    {
        sys:{
            id:13
        },
        fields:{
             blogHeading:"why network providers go for fiber cables",
             blogViews:"0",
             writer:"amos elphas",
             blogImage:{
                 fields:{
                     file:{
                         url:image_3
                     }
                 }
             }
        }
    }
]


const articles =[
    {
        sys:{
            id:22
        },
        fields:{
             articleHeading:"network configuration basics",
             articleWriter:"james mwathi",
             articleDate:date_today,
             articleImage:{
                 fields:{
                     file:{
                         url:image_1
                     }
                 }
             }
        }
    },
    {
        sys:{
            id:23
        },
        fields:{
             articleHeading:"network configuration basics",
             articleWriter:"james mwathi",
             articleDate:date_today,
             articleImage:{
                 fields:{
                     file:{
                         url:image_4
                     }
                 }
             }
        }
    },
    {
        sys:{
            id:24
        },
        fields:{
            articleHeading:"basic steps to ui design",
            articleWriter:"james mwathi",
            articleDate:date_today,
            articleImage:{
                fields:{
                    file:{
                        url:image_3
                    }
                }
            }
       }
    }
]
export {services,blog,articles};