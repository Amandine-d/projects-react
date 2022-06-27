import { Fragment } from 'react';
import { useParams, Route, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'JK', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Boudin', text: 'Please understand now' },
];

const QuoteDetail = () => {
  const params = useParams();
  //ou path='quotes/:quoteId/comments'

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return (
      <p>No quote found</p>
    );
  };

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
