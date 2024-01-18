// Given a character limit and a sms message, the message is split up into annotated chunks without cutting words as, 
//for example when sending the SMS "Hi Sivasrinivas, your Foodora order is arriving now!" with char limit 25, 
//the message is divided in 3 chunks "Hi Sivasrinivas, your", "Fooroda order is arriving", "now!". 
//Create a function that returns the number of chunks, when input is the message (text) and limit (number).

// Our Expectations:
// 1/ please translate task content into a short list of requirements
// 2/ write your code and test it if possible
// 3/ describe your code
// 4/ review your code as if it was in a PR submitted by someone else

function resultOfChunks(longString, limit) {

    try {

        const splitLongString = longString.split(" ");//split the string with spaces
        let chunkCount = 0;
        let isChunked = true; //continuously checking the chunked string
        let tempChuckData = [];//continuously putting the string into this array which need to chunk with comparing limit
        let chunkedStrings = [];

        //used for loop because of the control of the code, continue and i++
        for (let i = 0; i < splitLongString.length; i++) {

            if (i === (splitLongString.length - 1)) {
                chunkCount++;
                chunkedStrings.push(tempChuckData.length == 0 ? splitLongString[i] : tempChuckData);
                continue;//one of the reason of for loop
            }

            if (!isChunked) {
                let tempDataLength = 0;
                tempChuckData.forEach(tempString => {
                    tempDataLength += tempString.length;
                });

                //tempChuckData.length mean space count
                if ((tempDataLength + splitLongString[i + 1].length + tempChuckData.length) >= limit) {
                    chunkCount++;
                    if ((tempDataLength + splitLongString[i + 1].length + tempChuckData.length) === limit) {
                        tempChuckData.push(splitLongString[i + 1]);
                        i++;//one of the reason of for loop
                    }
                    chunkedStrings.push(tempChuckData);
                    tempChuckData = [];//reset the chunked array
                    isChunked = true;//reset the loop
                } else {
                    tempChuckData.push(splitLongString[i + 1]);
                }
                continue;
            }

            if ((splitLongString[i].length + splitLongString[i + 1].length) >= limit) {
                chunkCount++;
            } else {
                //continuously push the strings which need to be chunk
                tempChuckData.push(splitLongString[i], splitLongString[i + 1]);
                isChunked = false;
            }
        }

        if (chunkedStrings.length > 0) {
            console.log("Chunked strings are");
            chunkedStrings.forEach((strings, index) => {
                console.log(`${index + 1}. ${Array.isArray(strings) ? strings.join(" ") : strings}`)
            })
        }

        return chunkCount;
    } catch (err) {
        console.log(`You have an error ${err}`);
        return 0;
    }
}

const longString = "Hi Sivasrinivas, your Foodora order is arriving now!";
const limit = 25;
console.log(`Chunk Count is: ${resultOfChunks(longString, limit)}`);



