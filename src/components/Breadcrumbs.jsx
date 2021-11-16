import React from "react";
import { Link } from "react-router-dom";

import '../styles/breadcrumbs.css';

const Breadcrumbs = ({links}) => {

  const linksLength = links.length

  return (
    <div className="breadcrumbs__wrapper">
      {links?.map((link, index) => 
        <div className="breadcrumbs__item" key={index}>
          <Link 
            to={link.path} 
            className={link.active ? 'breadcrumbs__text breadcrumbs__active' : 'breadcrumbs__text'}
          > 
            {link.name} 
          </Link>
          
          {index + 1 !== linksLength && (
            <div className="breadcrumbs__pointer"> &rsaquo; </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Breadcrumbs;
