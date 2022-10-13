import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sort=(quotes,ascending)=>{
  return quotes.sort((quoteA,quoteB)=>{
    if(!ascending)
    return quoteA.id >quoteB.id ? 1:-1
    else
    return quoteA.id<quoteB.id ? 1: -1
  })

 }

const QuoteList = (props) => {
  const history= useHistory()
  const location=useLocation()
 const queryparams= new URLSearchParams(location.search)
 const isSortAscending=queryparams.get('sort')==='asc'
 
const sortedQuotes=sort(props.quotes, isSortAscending)
  const sortHandler=()=>{
   history.push('/quotes?sort='+(isSortAscending ? 'desc':'asc'))

  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>Sort {isSortAscending ? 'Ascending' : 'Descending'}</button>
        </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
