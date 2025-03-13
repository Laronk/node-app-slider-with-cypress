describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

// ---- NEW TESTS ----

// User can navigate through slides using navigation buttons
describe('Swiper Gallery Test', function () {
  it('Check slider navigation using buttons', function () {
    cy.visit('http://localhost:3000');
    // check if first slide is Rome
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    // previous slide should be Paris (slider wraparound functionlaity - backwards)
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    // next slide should again be Rome (wraparound functionality - forward)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});
