
// eslint-disable-next-line no-undef
const g = getGlobal();

async function addToday(args) {
    console.log('hi from command.');
    console.log('getGlobal: ', g);

    try {
        await window.Excel.run(async (context) => {
            const range = context.workbook.getSelectedRange();
            range.format.fill.color = "yellow";
            await context.sync();
        });
    } catch (error) {
        // Note: In a production add-in, notify the user through your add-in's UI.
        console.error(error);
    }

    // Calling event.completed is required. event.completed lets the platform know that processing has completed.
    args.completed();
}


window.Office.actions.associate('AddTodayButton', addToday);