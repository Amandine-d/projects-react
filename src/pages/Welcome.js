import { Route } from 'react-router-dom';
//Need to wrape Route in Routes
//Outlet
//Placeholder telling where nested route content should be inserted
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path='/welcome/new-user'>
        <p>Welcome, new user</p>
      </Route>

    </section>
  );
};

export default Welcome;