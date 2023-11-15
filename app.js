$(document).ready(function () {
const drumTypes = ['Snare Drum', 'Bass Drum', 'Hi-Hat', 'Tom-Tom'];

    const drumContainer = $('#content');
    drumTypes.forEach(drum => {
        drumContainer.append(`<div class="drum">${drum}</div>`);
    });

    $('.drum').css({
        'border': '2px solid #333',
        'padding': '20px',
        'margin': '10px',
        'cursor': 'pointer',
        'background-color': '#fff',
        'transition': 'background-color 0.3s',
    });

    $('.drum').on('click', function () {
        alert(`You clicked on ${$(this).text()}!`);
    });

    $('.drum').hover(
        function () {
            $(this).css('background-color', 'red');
        },
        function () {
            $(this).css('background-color', '#fff');
        }
    );

    const usageInstructions = "For usage instructions, refer to doc.pdf";
    console.log(usageInstructions);
});
