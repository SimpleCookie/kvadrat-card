import adam_sernheim from "./kvadratare/adam_sernheim.jpg"
import andreas_strindin from "./kvadratare/andreas_strindin.jpg"
import goran_akerstrom from "./kvadratare/goran_akerstrom.jpg"
import jan_heder from "./kvadratare/jan_heder.jpg"
import kent_gran from "./kvadratare/kent_gran.jpg"
import lars_olov_lundvik from "./kvadratare/lars_olov_lundvik.jpg"
import mats_danielsson from "./kvadratare/mats_danielsson.jpg"
import michael_wallner from "./kvadratare/michael_wallner.jpg"
import natalia_molina from "./kvadratare/natalia_molina.jpg"
import niclas_jonsson from "./kvadratare/niclas_jonsson.jpg"
import per_bernhardsson from "./kvadratare/per_bernhardsson.jpg"
import reine_palsson from "./kvadratare/reine_palsson.jpg"
import sara_westin from "./kvadratare/sara_westin.jpg"
import susanne_jonsson from "./kvadratare/susanne_jonsson.jpg"
import christel_jonsson from "./kvadratare/christel_jonsson.jpg"
import lars_markstrom from "./kvadratare/lars_markstrom.jpg"
import henrik_bylin from "./kvadratare/henrik_bylin.jpg"
import henric_norlander from "./kvadratare/henric_norlander.jpg"
import marcus_ekstrom from "./kvadratare/marcus_ekstrom.jpg"

export interface Kvadratare {
    name: string
    img: any
    employed?: boolean
}
export const kvadratare: Kvadratare[] = [
    { 
        name: "Adam Sernheim",
        img: adam_sernheim, 
    },
    { 
        name: "Andreas Strindin",
        img: andreas_strindin, 
    },
    { 
        name: "Goran Akerstrom",
        img: goran_akerstrom, 
    },
    { 
        name: "Jan Heder",
        img: jan_heder, 
    },
    { 
        name: "Kent Gran",
        img: kent_gran, 
    },
    { 
        name: "Lars Olov Lundvik",
        img: lars_olov_lundvik, 
    },
    { 
        name: "Mats Danielsson",
        img: mats_danielsson, 
    },
    { 
        name: "Michael Wallner",
        img: michael_wallner, 
    },
    { 
        name: "Natalia Molina",
        img: natalia_molina, 
    },
    { 
        name: "Niclas Jonsson",
        img: niclas_jonsson, 
    },
    { 
        name: "Per Bernhardsson",
        img: per_bernhardsson, 
    },
    { 
        name: "Reine Palsson",
        img: reine_palsson, 
    },
    { 
        name: "Sara Westin",
        img: sara_westin, 
    },
    { 
        name: "Susanne Jonsson",
        img: susanne_jonsson, 
    },
    { 
        name: "Fredrik Dahlén",
        img: null, 
    },
    { 
        name: "Göran Åkerström",
        img: null, 
    },
    { 
        name: "Urban Sandström",
        img: null, 
    },
    { 
        name: "Peter Bruinsma",
        img: null, 
    },
    { 
        name: "Christel Jonsson",
        img: christel_jonsson, 
        employed: true,
    },
    { 
        name: "Lars Markström",
        img: lars_markstrom, 
        employed: true,
    },
    { 
        name: "Henrik Bylin",
        img: henrik_bylin, 
    },
    { 
        name: "Henric Norlander",
        img: henric_norlander, 
    },
    { 
        name: "Marcus Ekström",
        img: marcus_ekstrom, 
    },

]