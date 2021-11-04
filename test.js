const gtts = require('node-gtts');
const path = require('path');
const fileName = path.join(__dirname, 'test.mp3');

function Test(value) {
    const languages = [{
        af: "af",
        ar: "ar",
        ca: "ca",
        ch: "zh",
        en: "en",
        fr: "fr",
        ge: "de",
        hu: "hu",
        it: "it",
        jp: "ja",
        ko: "ko",
        br: "pt-br",
        ru: "ru",
        es: "es",
        sv: "sv",
        tr: "tr"
    }];

    const valueSplit = value.split(" ");

    const valueSlice = value.slice('2').trim();

    for(let attributes in languages) {
        if(languages[attributes][valueSplit[0]]) {
            gtts(languages[attributes][valueSplit[0]]).save(fileName, valueSlice);
        };
    }
}

Test('ar alahu akbar')