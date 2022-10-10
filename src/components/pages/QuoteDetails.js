import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from '../quotes/HighlightedQuote'
const QuoteDetails=()=>{
    const params=useParams();
    const DUMMY_QUOTES=[
        {id: 'q1', author: 'R V Dadhe', text:'Life in Cananda is worst'},
        {id: 'q2', author: 'C Joshi', text:'Watch Swades and come back then!'},
        {id: 'q3', author: 'A Bhave', text:'+1'},
    
    ]

    const quote=DUMMY_QUOTES.find(item=> item.id===params.quoteid)

    if(!quote)
    {
        return(
            <p> No Quote found!</p>
        )
    }
    return(
<Fragment>
        <HighlightedQuote text={quote.text} author={quote.author}/>
    <Route path={`/quotes/${params.quoteid}/comments`}>
        <Comments />
    </Route>
</Fragment>
    )
}

export default QuoteDetails;