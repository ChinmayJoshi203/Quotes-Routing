import { Fragment, useEffect } from "react";
import { Link, Route, useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import Comments from "../comments/Comments";
import HighlightedQuote from '../quotes/HighlightedQuote'
import LoadingSpinner from "../UI/LoadingSpinner";
const QuoteDetails=()=>{
    const params=useParams();
    const {quoteid}=params;
    const {sendRequest, status, data:loadedQuote, error}=useHttp(getSingleQuote, true)
   useEffect(()=>{
    sendRequest(quoteid)
   },[sendRequest,quoteid])

   if(status==='pending')
   {
    return (
        <div className="centered">
            <LoadingSpinner/>
        </div>
    )
   }

   if(status==='error')
   {
    return(
       <p className="centerd focussed">{error}</p>
    )
   }
    if(!loadedQuote.text)
    {
        return(
            <p> No Quote found!</p>
        )
    }
    return(
<Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
<Route path={`/quotes/${params.quoteid}`} exact>
<div className="cenetered">
            <Link className="btn--flat" to={`/quotes/${params.quoteid}/comments`}>Load Comments</Link>
        </div>
</Route>
    <Route path={`/quotes/${params.quoteid}/comments`}>
        <Comments quoteid={params.quoteid}/>
    </Route>
</Fragment>
    )
}

export default QuoteDetails;