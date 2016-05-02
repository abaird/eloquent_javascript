var plan = ['############################',
  '#      #    #      o      ##',
  '#                          #',
  '#          #####           #',
  '##         #   #    ##     #',
  '###           ##     #     #',
  '#           ###      #     #',
  '#   ####                   #',
  '#   ##       o             #',
  '# o  #         o       ### #',
  '#    #                     #',
  '############################'];

var Vector = require('./vector');
var Grid = require('./grid');
var BouncingCritter = require('./bouncing_critter');
var Utils = require('./common');
var World = require('./world');
var View = require('./view');
var Wall = require('./wall');
var LifelikeWorld = require('./lifelikeWorld');
var Plant = require('./plant');
var PlantEater = require('./plant_eater');


var grid = new Grid(5, 5);
// console.log(grid.get(new Vector(1, 1)));
grid.set(new Vector(1, 1), 'X');
// console.log(grid.get(new Vector(1, 1)));
// console.log(grid.isInside(new Vector(1,6)));
// console.log(grid.isInside(new Vector(1,1)));

// console.log(World);
//var world = new World(plan, {'#': Wall,
//  'o': BouncingCritter});
// console.log(world.toString());

// console.log('***************** MOVING ***********************');
// for (var i = 0; i < 5; i++) {
//   world.turn();
//   console.log(world.toString());
// }


//
// animateWorld(new World(
//   ["############",
//     "#     #    #",
//     "#   ~    ~ #",
//     "#  ##      #",
//     "#  ##  o####",
//     "#          #",
//     "############"],
//   {"#": Wall,
//     "~": WallFollower,
//     "o": BouncingCritter}
// ));
//
//
//
var valley = new LifelikeWorld(
  ['############################',
    '#####                 ######',
    '##   ***                **##',
    '#   *##**         **  O  *##',
    '#    ***     O    ##**    *#',
    '#       O         ##***    #',
    '#                 ##**     #',
    '#   O       #*             #',
    '#*          #**       O    #',
    '#***        ##**    O    **#',
    '##****     ###***       *###',
    '############################'],
  {'#': Wall,
    'O': PlantEater,
    '*': Plant}
);

//animateWorld(valley);
for (var i = 0; i < 50; i++) {
  valley.turn();
  console.log(valley.toString());
}
