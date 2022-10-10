import QuoteForm from '../quotes/QuoteForm'

const NewQuote=()=>{
    const addQuoteHadnler=(quoteData)=>{
        console.log(quoteData)
    }
    return <QuoteForm onAddQuote={addQuoteHadnler} />
}

export default NewQuote;