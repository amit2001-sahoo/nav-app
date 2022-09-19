import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const[Translate,setTranslate] = useState('');
    const[waittext,setwaittext] = useState(text);
    useEffect(() => {
        const tid = setTimeout(() => {
            setwaittext(text);
        },1000);
        return () => {
            clearTimeout(tid);
        }
    },[text]);
    useEffect(() => {
        const doTranslation = async () => {
            const  response  = await axios.post(
            'https://translation.googleapis.com/language/translate/v2',{},
            {
                params: {
                q: text,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                },
            }
            );
            // console.log(response.data.data.translations[0].translatedText);
            setTranslate(response.data.data.translations[0].translatedText);
            }
    doTranslation();
  }, [language, waittext]);
 
  return <div className='ui header'>
    {Translate}
  </div>
};

export default Convert;