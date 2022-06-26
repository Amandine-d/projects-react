import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = () => {

  const DUMMY_QUOTES = [
    { id: 'q1', author: 'JK', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Boudin', text: 'Please understand now' },
  ];

  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  );
};

export default AllQuotes;