import React, {useCallback} from 'react';
import "./ObjectLiterals.css";

const ObjectLiterals = () => {

    //Using if/else
    const getDogQuoteIFELSE = useCallback((breed) => {

    if(breed.toLowerCase() === 'akita'){
        return 'Akitas do speak, but only to those who know how to listen.'
    }else if(breed.toLowerCase() === 'beagle'){
        return 'Life is better with a Beagle.'
    }else if(breed.toLowerCase() === 'dachshund'){
        return 'Why do dachshunds wear their ears inside out?'
    }else if(breed.toLowerCase() === 'gloden retriever'){
        return 'The face of a Golden Retriever feels like home.'
    }else if(breed.toLowerCase() === 'pug'){
        return 'The puggle is real'
    }

    return "Quote not found!"

    },[]);

//Using switch case
const getDogQuoteSWITCHCASE = useCallback((breed)=> {
    switch(breed.toLowerCase()){
        case 'akita':
            return 'Akitas do speak, but only to those who know how to listen.';
        case 'beagle': 
            return 'Life is better with a Beagle.'
        case 'dachshund':
            return 'Why do dachshunds wear their ears inside out?';
        case 'golden retriever':
            return 'The face of a Golden Retriever feels like home.';
        case 'pug':
            return 'The puggle is real';
        default:
            return 'Quote not found!'
    }
},[]);

//Using object Literals
const getDogQuote = useCallback((breed)=> {
    const breeds = {
        akita: 'Akitas do speak, but only to those who know how to listen.',
        beagle : 'Life is better with a Beagle.',
        dachshund : 'Why do dachshunds wear their ears inside out?',
        'golden retriever' : 'The face of a Golden Retriever feels like home.',
        pug : 'The puggle is real'
    }

    return breeds[breed.toLowerCase()] ?? 'Quote not found!';
},[]);

  return (
    <div className="template">
        <h3 className="header">Test Object Literals</h3>
        <p>Using if-else:  {getDogQuoteIFELSE("AKITA")}</p>
        <p>Using switch-case: {getDogQuoteSWITCHCASE("AKITA")}</p>
        <p>Using object literals: {getDogQuote("AKITA")}</p>
    </div>
  )
}

export default ObjectLiterals