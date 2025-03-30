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

// Sprawdzenie czy galeria jest poprawnie wyświetlana:
// (sprawdź, czy wszystkie elementy galerii są widoczne)
// Krok 1: Otwórz stronę z galerią.
// Krok 2: Sprawdź, czy główny kontener galerii jest widoczny.
// Krok 3: Sprawdź, czy trzy slajdy w galerii są widoczne.
// Krok 4: Sprawdź, czy przyciski nawigacji (poprzedni, następny) są obecne i klikalne.
describe('Swiper Gallery Test', function () {
  it('Check if gallery elements are visible', function () {
    cy.visit('http://localhost:3000');
    // Check if the main gallery container is visible
    cy.get('.swiper-container').should('be.visible');
    // Check if three slides are visible
    cy.get('.swiper-slide').should('have.length', 3);
    // Check if navigation buttons are present and clickable
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-button-prev').should('be.visible').click();
  });
});
