import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './../Main';
import Footer from './../Footer'
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Navbar routing', () => {
    it('renders Home component when HOME link is clicked', () => {
      render(
        <BrowserRouter>
          <Navbar />
          <Main />
          <Footer />
        </BrowserRouter>
      );
    
      fireEvent.click(screen.getByText('HOME'));
      
      expect(screen.getByText('This is the Home component')).toBeInTheDocument();
    });
});

