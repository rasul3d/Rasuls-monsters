const myPromise = new Promise((resolve, reject)=>{
    if (false){
        setTimeout(()=>{
            resolve(`I have success`);
        },1000);
    }
   else {
       reject (`I have rejected`)
   }
});
 
myPromise
  .then(val=> console.log(val))
  .catch(rej=> console.log(rej));