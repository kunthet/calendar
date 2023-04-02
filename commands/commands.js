import { LunaDate, toStringKh } from '../calendar/LunaDate.js';

function isExcel() {
    return !!window.Excel;
}
function isWord() {
    return !!window.Word;
}
function isPowerPoint() {
    return !!window.PowerPoint;
}

async function addToday(args) {
    const date = new LunaDate().getDate();
    const dateString = toStringKh(date);
    await insertTextIntoDocument(dateString);
    
    // Calling event.completed is required. event.completed lets the platform know that processing has completed.
    args.completed();
}

async function insertTextIntoDocument(dateString) {
    try {
        if (isWord()){
            await window.Word.run(async (context) => {
                const range = context.document.getSelection();
                range.insertText(dateString, "replace");
                await context.sync();
            });
        }
        if (isExcel()){
            await window.Excel.run(async (context) => {
                const range = context.workbook.getSelectedRange();
                range.values = [[dateString]];
                await context.sync();
            });
        }
        if (isPowerPoint()){
            await window.Office.context.document.setSelectedDataAsync(dateString);
            await window.Office.context.sync();
        }
    } catch (error) {
        console.log(error);
    }
}



module.exports.addToday = addToday;
module.exports.insertTextIntoDocument = insertTextIntoDocument;