import { NavLink } from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <NavLink to='/products/p1'>
            A book
          </NavLink>
        </li>
        <li>
          <NavLink to='/products/p2'>
            Yoga classes
          </NavLink>
        </li>
        <li>
          <NavLink to='/products/p3'>
            An online course
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Products;