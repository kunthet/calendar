import { LunaDate, toStringKh, adToStringKh } from '../calendar/LunaDate.js';

function isExcel() {
    return !!window.Excel;
}
function isWord() {
    return !!window.Word;
}
function isPowerPoint() {
    return !!window.PowerPoint;
}

export async function addToday(args) {
    const date = new LunaDate().getDate();
    const luna = toStringKh(date);
    const sola = adToStringKh(date);
    await insertTextIntoDocument(`${luna}\n${sola}`);
    
    // Calling event.completed is required. event.completed lets the platform know that processing has completed.
    args.completed();
}

export async function insertTextIntoDocument(dateString) {
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



// module.exports.addToday = addToday;
// module.exports.insertTextIntoDocument = insertTextIntoDocument;