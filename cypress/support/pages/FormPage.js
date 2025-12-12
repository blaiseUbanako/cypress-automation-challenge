class FormPage {
  // Locators
  elements = {
    firstNameInput: () => cy.get('#firstName'),
    lastNameInput: () => cy.get('#lastName'),
    emailInput: () => cy.get('#userEmail'),
    genderRadio: (gender) => cy.get(`input[name="gender"][value="${gender}"]`),
    genderLabel: (gender) => cy.contains('label', gender),
    mobileInput: () => cy.get('#userNumber'),
    dateOfBirthInput: () => cy.get('#dateOfBirthInput'),
    subjectsInput: () => cy.get('#subjectsInput'),
    hobbiesCheckbox: (hobby) => cy.get(`label:contains("${hobby}")`),
    pictureUpload: () => cy.get('#uploadPicture'),
    currentAddressTextarea: () => cy.get('#currentAddress'),
    stateDropdown: () => cy.get('#state'),
    stateInput: () => cy.get('#state input'),
    cityDropdown: () => cy.get('#city'),
    cityInput: () => cy.get('#city input'),
    submitButton: () => cy.get('#submit'),
    modalTitle: () => cy.get('#example-modal-sizes-title-lg'),
    modalContent: () => cy.get('.modal-body'),
    modalTable: () => cy.get('.table'),
    closeButton: () => cy.get('#closeLargeModal'),
    emailError: () => cy.get('#userEmail:invalid'),
    mobileError: () => cy.get('#userNumber:invalid')
  };

  // Actions
  visit() {
    cy.visit('/automation-practice-form');
    // Remove ads that might interfere
    cy.get('body').then($body => {
      if ($body.find('#fixedban').length > 0) {
        cy.get('#fixedban').invoke('remove');
      }
    });
  }

  fillFirstName(firstName) {
    this.elements.firstNameInput().clear().type(firstName);
    return this;
  }

  fillLastName(lastName) {
    this.elements.lastNameInput().clear().type(lastName);
    return this;
  }

  fillEmail(email) {
    this.elements.emailInput().clear().type(email);
    return this;
  }

  selectGender(gender) {
    this.elements.genderLabel(gender).click();
    return this;
  }

  fillMobile(mobile) {
    this.elements.mobileInput().clear().type(mobile);
    return this;
  }

  fillDateOfBirth(dateString) {
    // Expected format: "15 March 1990"
    const [day, month, year] = dateString.split(' ');
    this.elements.dateOfBirthInput().click();
    cy.get('.react-datepicker__month-select').select(month);
    cy.get('.react-datepicker__year-select').select(year);
    cy.get(`.react-datepicker__day--0${day.padStart(2, '0')}`).click();
    return this;
  }

  fillSubjects(subjectsString) {
    // Expected format: "Maths, Physics"
    const subjects = subjectsString.split(',').map(s => s.trim());
    subjects.forEach(subject => {
      this.elements.subjectsInput().type(`${subject}{enter}`);
    });
    return this;
  }

  selectHobbies(hobbiesString) {
    // Expected format: "Sports, Reading"
    const hobbies = hobbiesString.split(',').map(h => h.trim());
    hobbies.forEach(hobby => {
      this.elements.hobbiesCheckbox(hobby).click();
    });
    return this;
  }

  uploadPicture(fileName) {
    this.elements.pictureUpload().attachFile(fileName);
    return this;
  }

  fillCurrentAddress(address) {
    this.elements.currentAddressTextarea().clear().type(address);
    return this;
  }

  selectState(state) {
    this.elements.stateDropdown().click();
    this.elements.stateInput().type(`${state}{enter}`);
    return this;
  }

  selectCity(city) {
    this.elements.cityDropdown().click();
    this.elements.cityInput().type(`${city}{enter}`);
    return this;
  }

  submit() {
    this.elements.submitButton().click({ force: true });
  }

  // Assertions
  verifyModalDisplayed() {
    this.elements.modalTitle().should('be.visible').and('contain', 'Thanks for submitting the form');
  }

  verifyModalNotDisplayed() {
    this.elements.modalTitle().should('not.exist');
  }

  verifySubmittedData(firstName, lastName, email, gender, mobile) {
    this.elements.modalTable().within(() => {
      cy.contains('td', 'Student Name').next().should('contain', `${firstName} ${lastName}`);
      cy.contains('td', 'Student Email').next().should('contain', email);
      cy.contains('td', 'Gender').next().should('contain', gender);
      cy.contains('td', 'Mobile').next().should('contain', mobile);
    });
  }

  verifyEmailValidation() {
    this.elements.emailInput().should('have.class', 'is-invalid').or('have.attr', 'aria-invalid', 'true');
  }

  verifyMobileValidation() {
    this.elements.mobileInput().should('have.class', 'is-invalid').or('have.attr', 'aria-invalid', 'true');
  }
}

export default FormPage;