var board_size = 4;
var black_space = '#';
var white_space = ' ';
for (var board_lines = 1; board_lines <= board_size; board_lines++) {
    var start_char = (board_lines % 2 == 0) ? black_space : white_space;
    var board_spaces = '';
    for (var i = 1; i <= board_size; i++) {
        if (i % 2 !== 0)
            board_spaces += start_char;
        else
            board_spaces += start_char === white_space ? black_space : white_space;
    }
    console.log(board_spaces);
}
