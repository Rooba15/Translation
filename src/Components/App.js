import React,{useState} from 'react';
import '../style.css';
import Header from './Header';
import Container from './Container';
import {IntlProvider} from 'react-intl';
import en from './../lang/en.json';
import fr from './../lang/fr.json';
import ch from './../lang/ch.json';

const App=(props)=>{
    const [locale, setLocale] = useState("en");
    const [message, setMessage] = useState(en);
    // addLocaleData([...en, ...fr,...ch])
    var messageContent=en;
    const langChange=(val)=>{
        switch(val){
            case 'en':
                setMessage(en)
                break;
            case 'fr':
                setMessage(fr)
                break;
            case 'zh':
                setMessage(ch)
                break;
            default:
                setMessage(en)
        }
        setLocale(val);
        console.log(messageContent)
    }
    return(
        <IntlProvider messages={message} locale={locale || 'en'} defaultLocale="en">
        <Header langChange={langChange}/>
        <Container/>
        </IntlProvider>
    )
}

export default App;
