import { initGame } from "./data/data.js";
import { initGameRender } from "./Render/main.js";

//will be useful till game ends
const globalState = initGame();

initGameRender(globalState);