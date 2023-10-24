const generateID = () =>{
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomChar = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomChar += characters[randomIndex];
    }
    let randomNum = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    let uniqueID = randomChar + randomNum

    return uniqueID;
}

export{ generateID }

//https://www.faceprep.in/java/java-script-program-to-generate-random-alphhabets
//https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13
