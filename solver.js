importScripts('https://cdn.jsdelivr.net/npm/cubejs@1.3.2/lib/cube.js','https://cdn.jsdelivr.net/npm/cubejs@1.3.2/lib/solve.js');
let ready=false;onmessage=e=>{try{if(!ready){Cube.initSolver();ready=true}let c=Cube.fromString(e.data);postMessage({result:c.isSolved()?'':c.solve()})}catch(e){postMessage({error:'求解失敗：'+e.message})}};
