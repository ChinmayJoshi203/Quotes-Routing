import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../comments/Comments";
const QuoteDetails=()=>{
    const params=useParams();
    return(
<Fragment>
    <h1>Quote Details</h1>
    <p>{params.quoteid}</p>
    <Route path={`/quotes/${params.quoteid}/comments`}>
        <Comments />
    </Route>
</Fragment>
    )
}

export default QuoteDetails;