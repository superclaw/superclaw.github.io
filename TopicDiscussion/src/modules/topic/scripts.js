import React from 'react';
import './style.css';

const makeTopic = (json) => {
 return (json) ? (
     <article className="topic">
       <h2 className="topic__title">{json.title}</h2>
       {
         json.content.map((p, i) => {
           return (
               <p key={i} className="topic__p">
                 {p}
               </p>
           )
         })
       }
       <address className="topic__author">
         <span className="topic__name">{json.details.name}</span>
         <span className="topic__date">{json.details.date}</span>
       </address>
     </article>
 ) : (
     <div className="topic">
       <div className="error-wrapper">
         <p className="error">Ошибка сервера</p>
       </div>
     </div>
 );
}

export default makeTopic;