import React from 'react'

const ProObs = () => {
    {/* 
     observer can return multiple values
     they behave like arrays like filter values
     save subscription and call unsubscribe
     */}

     const myPromise=new Promise(resolve=>{
        setTimeout(()=>{
            resolve('dog');
            observer.next('cat');
            observer.next('bird');
        },1000) 
     })

     myPromise.then(result=>{
        console.log('promise:', result)
     })

     const myObservable=new Rx.Observable(observer =>{
        setTimeout(()=>{
            observer.next('dog');
            observer.next('cat');
            observer.next('bird');
        },1000)
     })

     myObservable.subscribe(result=>{
        console.log('observable:', result)
     })

  return (
    <div>ProObs</div>
  )
}

export default ProObs