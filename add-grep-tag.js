const fs = require('fs');
const xml2js = require('xml2js');

// Lees de XML-bestanden in
const xmlFiles = ['./cypress/reports/test-results.xml'];

// Haal de waarde van de grepTags-omgevingsvariabele op
const grepTagFile = './grep-tag.txt';
let grepTags = '';

function updateClassnames(result) {
    result.testsuites.testsuite.forEach(testsuite => {
        if (testsuite.testcase) {
            testsuite.testcase.forEach(testcase => {
                testcase.$.classname = testsuite.$.name;
            });
        }
    });
}

xmlFiles.forEach(filename => {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            console.error(`Fout bij het lezen van het bestand ${filename}: ${err}`);
            return;
        }

        // Converteer de XML naar een JSON-object
        xml2js.parseString(data, (err, result) => {
            if (err) {
                console.error(`Fout bij het parsen van XML in het bestand ${filename}: ${err}`);
                return;
            }

            try {
                grepTags = fs.readFileSync(grepTagFile, 'utf-8').trim();
            } catch (err) {
                console.error('Fout bij het lezen van het grep-tag bestand:', err);
            }

            // Voeg een attribuut toe aan het <testsuites>-element met de waarde van grepTags
            result.testsuites.properties = [{ property: [{ $: { name: 'testtag', value: grepTags } }] }];

            updateClassnames(result);

            // Converteer het bijgewerkte JSON-object terug naar XML
            const builder = new xml2js.Builder();
            const updatedXml = builder.buildObject(result);

            // Schrijf de bijgewerkte XML terug naar het bestand
            fs.writeFile(filename, updatedXml, err => {
                if (err) {
                    console.error(`Fout bij het schrijven naar het bestand ${filename}: ${err}`);
                    return;
                }
                console.log(`XML-bestand ${filename} is bijgewerkt.`);
            });
        });
    });
});