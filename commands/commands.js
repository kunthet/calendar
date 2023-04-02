
// eslint-disable-next-line no-undef
const g = getGlobal();

function addToday() {
    console.log('hi from command.');
    console.log('getGlobal: ', g);
}


window.Office.actions.associate('AddTodayButton', addToday);