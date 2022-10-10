import QuoteList from '../quotes/QuoteList'
const DUMMY_QUOTES=[
    {id: 'q1', author: 'R V Dadhe', text:'Life in Cananda is worst'},
    {id: 'q2', author: 'C Joshi', text:'Watch Swades and come back then!'},
    {id: 'q3', author: 'A Bhave', text:'+1'},

]

const AllQuotes=()=>{
    return(
        <QuoteList quotes={DUMMY_QUOTES} />
    )
}

export default AllQuotes;