it('checks that the titles are correct', () => {
    const page = cy.visit('/');
  
    page.get('h1').should('have.text', 'Welcome to Odyssey')
  });

  // it('navigates to the blog page on click', () => {
  //   const page = cy.visit('/');
  
  //   page.get('a').should('have.text', 'Get Started')
  //   page.get('a.btn undefined undefined undefined astro-5VNEE24L').should('exist')
  // });

  