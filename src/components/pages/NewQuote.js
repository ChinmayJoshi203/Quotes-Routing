import { useHistory } from 'react-router-dom'
import QuoteForm from '../quotes/QuoteForm'
const NewQuote=()=>{
    const history=useHistory()
    const addQuoteHadnler=(quoteData)=>{
        console.log(quoteData)
        history.push('/quotes')
    }
    return <QuoteForm onAddQuote={addQuoteHadnler} />
}

export default NewQuote;