'use strict';!function(require,directRequire){const a=require('./72653d4b93cdd7443296229431a7aa9a.js');const b=new class{constructor(){this.queue=[],this.run=(a,b)=>new Promise((c,d)=>{b&&this.deduplication(b),this.queue.push({func:a,type:b,resolve:c,reject:d}),this.checkRun()}),this.checkRun=()=>{process.nextTick(()=>{if(0<this.queue.length){const b=this.queue[0];b.func().then((c)=>{try{b.resolve(c),this.queue.shift(),this.checkRun()}catch(c){b.reject(c),a.error(`upload resolve err: ${c}`)}}).catch((c)=>{try{b.reject(c),this.queue.shift(),this.checkRun()}catch(c){b.reject(c),a.error(`upload reject err: ${c}`)}})}})}}deduplication(a){1>=this.queue.length||(this.queue=this.queue.slice(1).filter((b)=>b.type!==a))}};module.exports={buildType:{compile:'compile',upload:'upload',share:'share'},enqueueBuildTask:async function(a,c){return b.run(a,c)}}}(require('lazyload'),require);