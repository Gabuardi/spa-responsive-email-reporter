// GET DATA FROM data.json file
const DATA = data;

// ------------------------------------------------------------------------
// RECEIVE AN INPUT ELEMENT AND CHECK IF IS VALID
// ------------------------------------------------------------------------
function emailInputIsValid(input) {
    return input.value !== '' && input.checkValidity();
}

// ------------------------------------------------------------------------
// SEARCH AN PERSON WITH THE EMAIL PASSED ACROSS DATA ARRAY
// ------------------------------------------------------------------------
function searchPersonByEmail(email) {

    // READ EACH PERSON OF DATA ARRAY
    for (let person of DATA) {

        //CHECK IF HIS EMAIL MATCH WITH SEARCHED EMAIL
        if (person.email === email) {
            // IF MATCH RETURN THAT PERSON
            return person;
        }
    }
    // IF CYCLE END AND NEVER MATCH MEANS EMAIL NO EXIST
    return undefined;
}

// ------------------------------------------------------------------------
// SAVE AN FOUND PERSON ON THE LOCAL STORAGE
// ------------------------------------------------------------------------
function savePerson(person) {

    // SET AN ITEM WITH THE NAME PERSON ON THE LS
    localStorage.setItem('person', JSON.stringify(person));
}

// ------------------------------------------------------------------------
// RETURN THE CURRENT PAGE IN BROWSER
// ------------------------------------------------------------------------
function getCurrentPage() {

    // GET THE CURRENT LOCATION PATH
    var locationPath = window.location.pathname;

    // SPLIT THE STRING IN / CHARACTER
    var locationPathArray = locationPath.split('/');

    // AND RETURN THE LAST ITEM
    return locationPathArray[locationPathArray.length - 1];
}

// ------------------------------------------------------------------------
// RECEIVE THE ID OF THE INPUT WHICH GET THE EMAIL THAT WANT TO SEARCH
// ------------------------------------------------------------------------
function searchEmail(input_id) {

    // GET THE INPUT ELEMENT WHERE EMAIL WAS WRITTEN
    var input = document.getElementById(input_id);

    // CHECK IF THE INPUT EMAIL IS VALID
    if (emailInputIsValid(input)) {

        // IF INPUT IS VALID START TO SEARCH AN PERSON WITH THE EMAIL
        var person = searchPersonByEmail(input.value);

        // PERSON WAS FOUND?
        if (person !== undefined) {

            // IF YES SAVE THE PERSON INFORMATION IN LOCAL STORAGE
            savePerson(person);
        } else {

            // IF NO, REMOVE ANY PERSON THAT CAN BE SAVED
            localStorage.removeItem('person');
        }

        // FIND THE EMAIL OR NO, CHANGE THE VIEW TO SEARCH RESULT MODE
        changeView();
    }

    // IF INPUT EMAIL IS INVALID DO NOTHING
}
