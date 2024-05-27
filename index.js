// Hier benoem ik alle wijnen die staan in elke subcategorie. Elke wijn heeft een name en img.
const wijnen = {
    rood: {
        droog: {
            onder15: [
                { name: "Riporta Sangiovese - €7,99", img: "images/rooddroogondereen.png.avif" },
                { name: "Arrogant Frog Malbec Syrah - €8,65", img: "images/rooddroogondertwee.png.avif" },
                { name: "Tokara Cabernet Sauvignon - €14,39", img: "images/rooddroogonderdrie.png.avif" }
            ],
            boven15: [
                { name: "Poliziano Rosso Di Montepulciano - €16,99", img: "images/rooddroogboveneen.png.avif" },
                { name: "Castello Di Albola Chianti Riserva - €21,79", img: "images/rooddroogboventwee.png.avif" },
                { name: "Clos Du Marquis - €71,00", img: "images/rooddroogbovendrie.png.avif" }
            ]
        },
        zoet: {
            onder15: [
                { name: "Kaapse Veer Pinot Noir - €6,99", img: "images/roodzoetondereen.png.avif" },
                { name: "F. Chauvenet Vin De France Pinot Noir - €9,29", img: "images/roodzoetondertwee.png.avif" },
                { name: "Château Le Bourdieu Médoc - €13,29", img: "images/roodzoetonderdrie.png.avif" }
            ],
            boven15: [
                { name: "Angoris Merlot - €18,29", img: "images/roodzoetboveneen.png.avif" },
                { name: "Undurraga T.H. Pinot Noir Leyda - €21,99", img: "images/roodzoetboventwee.png.avif" },
                { name: "Domaine Jean Pierre Maldant Aloxe Corton Crapousuets Vieilles Vignes - €59,00", img: "images/roodzoetbovendrie.png.avif" }
            ]
        }
    },
    wit: {
        droog: {
            onder15: [
                { name: "Beacon Hill Sauvignon Blanc - €4,79", img: "images/witdroogondereen.avif" },
                { name: "Errazuriz Max Sauvignon Blanc - €13,29", img: "images/witdroogondertwee.png.avif" },
                { name: "Moselland Von Großen Lagen Mosel Riesling - €12,29", img: "images/witdroogonderdrie.avif" }
            ],
            boven15: [
                { name: "Groot Constantia Sauvignon Blanc - €16,65", img: "images/witdroogboveneen.png.avif" },
                { name: "Adam Riesling Letzenberg Bio - €26,99", img: "images/witdroogboventwee.png.avif" },
                { name: "Andrian Sauvignon Blanc Andrius - €38,99", img: "images/witdroogbovendrie.png.avif" }
            ]
        },
        zoet: {
            onder15: [
                { name: "Alasia Moscato D'Asti - €8,99", img: "images/witzoetondereen.avif" },
                { name: "Vallée Loire Vouvray Chenin Blanc - €9,49", img: "images/witzoetondertwee.png.avif" },
                { name: "Torres Viña Esmeralda - €10,79", img: "images/witzoetonderdrie.png.avif" }
            ],
            boven15: [
                { name: "Lavis Selezioni Clinga Gewürztraminer Trentino - €16,59", img: "images/witzoetboveneen.png.avif" },
                { name: "Karl Erbes Riesling Spätlese Feinherb - €17,49", img: "images/witzoetboventwee.png.avif" },
                { name: "Adam Kaefferkopf Cuvée Traditionelle - €23,99", img: "images/witzoetbovendrie.png.avif" }
            ]
        }
    }
};

// Hier ga ik de functie definieren die in werking word gezet als je op de button hebt geklikt. 
function laatwijnadvieszien() {
    // Door op de button te klikken gaat de functie in werking. Hij haalt eerst de keuzes op die je in .wijnform gemaakt hebt. 
    const form = document.querySelector('.wijnform');
    // Hiermee worden alle keuzes die je hebt gemaakt gecontroleerd en opgehaald. 
    const categorie = form.elements['categorie'].value;
    const smaak = form.elements['smaak'].value;
    const prijs = form.elements['prijs'].value;
    // Hiermee word er gecontroleerd of alle opties zijn geselecteerd, onderaan het bestand word er gecontroleerd of er wat geselecteerd is. 
    if (categorie && smaak && prijs) {
        let geselecteerdewijnen;
    // Hier word bepaald welke wijn hoort bij welke wijn er geselecteerd is. 
    if (categorie === "rood") {
        if (smaak === "droog") {
            if (prijs === "onder15") {
                geselecteerdewijnen = wijnen.rood.droog.onder15;
            } else if (prijs === "boven15") {
                geselecteerdewijnen = wijnen.rood.droog.boven15;
            }
        } else if (smaak === "zoet") {
            if (prijs === "onder15") {
                geselecteerdewijnen = wijnen.rood.zoet.onder15;
            } else if (prijs === "boven15") {
                geselecteerdewijnen = wijnen.rood.zoet.boven15;
            }
        }
    } else if (categorie === "wit") {
        if (smaak === "droog") {
            if (prijs === "onder15") {
                geselecteerdewijnen = wijnen.wit.droog.onder15;
            } else if (prijs === "boven15") {
                geselecteerdewijnen = wijnen.wit.droog.boven15;
            }
        } else if (smaak === "zoet") {
            if (prijs === "onder15") {
                geselecteerdewijnen = wijnen.wit.zoet.onder15;
            } else if (prijs === "boven15") {
                geselecteerdewijnen = wijnen.wit.zoet.boven15;
            }
        }
    }
    // Definieer wat het wijnadviessection is en haal op. 
    const wijnadviessection = document.querySelector('.wijnadvies');
    // Hier word de inhoud van het .wijnavies sectionelement leeggemaakt zodat er een nieuw advies kan worden laten zien. 
    wijnadviessection.innerHTML = '';
    // Voor elke wijn die geselecteerd is, word een section element gemaakt. Vervolgens word de wijnimage en text opgehaald en toegevoegd als child. 
    geselecteerdewijnen.forEach(wijn => {
        const wijnsection = document.createElement('section');
        const wijnimage = document.createElement('img');
        const wijnnaam = document.createElement('p');

        wijnimage.src = wijn.img;
        wijnnaam.textContent = wijn.name;

        wijnsection.appendChild(wijnimage);
        wijnsection.appendChild(wijnnaam);
        wijnadviessection.appendChild(wijnsection);
    });
    // Hier word het proostgeluid gedefinieerd en afgespeeld.
    const proostgeluid = document.querySelector('.proostgeluid');
    proostgeluid.play();
    // Als niet alle opties zijn geselecteerd, word dit bericht laten zien.
        } else {
    alert('Selecteer alsjeblieft een optie in alle categorieën.');
    }
}