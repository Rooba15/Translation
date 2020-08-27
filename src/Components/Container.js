import React from 'react';
import {FormattedMessage} from 'react-intl';

const Container=()=>{
    return(
        <div id="app-theme" className="container theme-light">
            <div className="blog-title"><FormattedMessage id="blogTitle" defaultMessage="Blog Title" /></div>
            <div className="author-info">
                <div className="avatar"></div>
                <div className="info">
                    <div className="author-label"><FormattedMessage id="author" defaultMessage="Author" /></div>
                    <div className="name">Rooba</div>
                    <div className="date">8/26/2020 1:00 PM</div>
                </div>
            </div>
            <article className="theme-article">
            <h1><FormattedMessage id="articleTitle" defaultMessage="Title" /></h1>
                <p>
                   <FormattedMessage id="articlePara1" defaultMessage="Para" />
                </p>
                <h3><FormattedMessage id="articleTitle2" defaultMessage="Title" /></h3>
                <p>
                    <FormattedMessage id="articlePara2" defaultMessage="Para" />
                </p>
                <div className="action">
                   <span className='actionbtn'><i className="fa fa-thumbs-o-up"></i></span>
                   <span className='actionbtn'><i className="fa fa-share-alt"></i></span>
                   <span className='actionbtn'><i className="fa fa-comment-o"></i></span>
                </div>
                </article>
        </div>
    )
}

export default Container;
