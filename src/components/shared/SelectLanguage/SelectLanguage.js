import React from 'react';
import './SelectLanguage.scss';
import SingleLanguage from './SingleLanguage';
import { dataLocalStorage } from './dataLocalStorage';

import england from '../../../assets/flags/gb.svg';
import albania from '../../../assets/flags/al.svg';
import german from '../../../assets/flags/de.svg';
import france from '../../../assets/flags/fr.svg';
import italy from '../../../assets/flags/it.svg';
import spain from '../../../assets/flags/es.svg';
import turkey from '../../../assets/flags/tr.svg';
import portugal from '../../../assets/flags/pt.svg';
import russia from '../../../assets/flags/ru.svg';
import china from '../../../assets/flags/cn.svg';
import japan from '../../../assets/flags/jp.svg';

import { useDispatch , useSelector } from 'react-redux';
import { chooseLanguage } from '../../../store/actions/languageActions';
import { MdKeyboardArrowDown } from 'react-icons/md';

const SelectLanguage = () => {

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  
  const languages = [
    { value: 'en-GB', lang: 'English', flag: england },
    { value: 'sq-AL', lang: 'Albanian', flag: albania },
    { value: 'de-DE', lang: 'German', flag: german },
    { value: 'fr-FR', lang: 'French', flag: france },
    { value: 'it-IT', lang: 'Italian', flag: italy },
    { value: 'es-ES', lang: 'Spanish', flag: spain },
    { value: 'tr-TR', lang: 'Turkish', flag: turkey },
    { value: 'pr-PR', lang: 'Portugese', flag: portugal },
    { value: 'rs-RS', lang: 'Russian', flag: russia },
    { value: 'ch-CH', lang: 'Chinese', flag: china },
    { value: 'jp-JP', lang: 'Japanese', flag: japan },
  ];

    const handleLanguageChange = (language, locale) => {
        dispatch(chooseLanguage(locale));
        dataLocalStorage.setLanguage(language);
        dataLocalStorage.setLocale(locale);
    };
    let flag = null;
    switch (dataLocalStorage.getLocale()) {
      case 'en-GB':
        flag = england;
        break;
      case 'sq-AL':
        flag = albania;
        break;
      case 'de-DE':
        flag = german;
        break;
      case 'fr-FR':
        flag = france;
        break;
      case 'it-IT':
        flag = italy;
        break;
      case 'es-ES':
        flag = spain;
        break;
      case 'tr-TR':
        flag = turkey;
        break;
      case 'pr-PR':
        flag = portugal;
        break;
      case 'rs-RS':
        flag = russia;
        break;
      case 'jp-JP':
        flag = japan;
        break;
      case 'ch-CH':
        flag = china;
        break;

      default:
        flag = england;
    }
  return (
    <div className='select-language'>
      <img src={flag} alt='selected flag' />
      {dataLocalStorage.getLanguage() || 'English'}
      <MdKeyboardArrowDown className='arrow' styles='up' />

      <div className='dropdown'>
        {languages
         .sort(function (a, b) {
            let lang1 = a.lang.toUpperCase();
            let lang2 = b.lang.toUpperCase();
            if (lang1 < lang2) {
                return -1;
            }
            if (lang1 > lang2) {
                return 1;
            }
            return 0;
         })
         .map((thisLang, i) => {
            return (
                <SingleLanguage 
                 value={thisLang.value}
                 key={i}
                 handleLanguageChange={() =>
                    handleLanguageChange(thisLang.lang, thisLang.value)
                 }
                 styles={thisLang.value === language && 'selected'}
                 language={thisLang.lang}
                 flag={thisLang.flag}
                ></SingleLanguage>
            );
         })}
      </div>
    </div>
  )
}

export default SelectLanguage;