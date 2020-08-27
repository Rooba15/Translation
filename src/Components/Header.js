import React from 'react';
import {FormattedMessage} from 'react-intl';

const Header=(props)=>{
   const langChange=(event)=>{
        props.langChange(event.target.value)
   }
    return(
        <header>
            <h1 className="hero-title">
            <FormattedMessage id="heroTitle" defaultMessage="Hero Title" />
            </h1>
            <div className="select-lang">
                <label htmlFor="lang"><FormattedMessage id="selectLang" defaultMessage="Language" /> </label>
                <select name="lang" onChange={langChange}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="zh">Chinese</option>
                </select>
            </div>
        </header>
    )
}

export default Header;
