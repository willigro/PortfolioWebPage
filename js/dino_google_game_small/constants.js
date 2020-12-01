const MAX_SPEED = 20
const BASE_SPEED = 8

const MIN_ENEMY_DISTANCE = $("#canvas-dino").width() / 3
const DINO_HEIGHT = 10
const TREE_WIDTH = 15
const OBJECT_WIDTH = 5

const DINO_POPULATION = 100 // 1000 conseguiu
const ERAS = 100

const TREE_TAG = "Tree"

const BASE_X_POSITION = DINO_HEIGHT * 2;
const BASE_Y_POSTITION = $("#canvas-dino").height() - (DINO_HEIGHT * 2);
console.log(BASE_X_POSITION, BASE_Y_POSTITION)
const TREE_START_X = maxWidth / 4
const TREE_START_X_TO_DESTROY = BASE_X_POSITION