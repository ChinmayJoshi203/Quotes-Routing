import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const history= useHistory()
  const location=useLocation()
 const queryparams= new URLSearchParams(location.search)
 const isSortAscending=queryparams.get('sort')==='asc'
  const sortHandler=()=>{
   history.push('/quotes?sort='+(isSortAscending ? 'desc':'asc'))
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>Sort {isSortAscending ? 'Ascending' : 'Descending'}</button>
        </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
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
