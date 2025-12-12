import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import FormPage from '../pages/FormPage';

const formPage = new FormPage();
let formData = {};

Given('I navigate to the DemoQA form page', () => {
  formPage.visit();
});

When('I fill in the form with the following details:', (dataTable) => {
  const data = dataTable.rowsHash();
  
  formData = {
    firstName: data['First Name'],
    lastName: data['Last Name'],
    email: data['Email address'],
    gender: data['Gender'],
    mobile: data['Mobile']
  };
  
  formPage
    .fillFirstName(formData.firstName)
    .fillLastName(formData.lastName)
    .fillEmail(formData.email)
    .selectGender(formData.gender)
    .fillMobile(formData.mobile);
});

When('I fill in the complete form with the following details:', (dataTable) => {
  const data = dataTable.rowsHash();
  
  formData = {
    firstName: data['First Name'],
    lastName: data['Last Name'],
    email: data['Email address'],
    gender: data['Gender'],
    mobile: data['Mobile'],
    dateOfBirth: data['Date of Birth'],
    subjects: data['Subjects'],
    hobbies: data['Hobbies'],
    currentAddress: data['Current Address'],
    state: data['State'],
    city: data['City']
  };
  
  formPage
    .fillFirstName(formData.firstName)
    .fillLastName(formData.lastName)
    .fillEmail(formData.email)
    .selectGender(formData.gender)
    .fillMobile(formData.mobile)
    .fillDateOfBirth(formData.dateOfBirth)
    .fillSubjects(formData.subjects)
    .selectHobbies(formData.hobbies)
    .fillCurrentAddress(formData.currentAddress)
    .selectState(formData.state)
    .selectCity(formData.city);
});

When('I fill in the form with invalid email {string}', (invalidEmail) => {
  formData = {
    firstName: 'Test',
    lastName: 'User',
    email: invalidEmail,
    gender: 'Male',
    mobile: '1234567890'
  };
  
  formPage
    .fillFirstName(formData.firstName)
    .fillLastName(formData.lastName)
    .fillEmail(formData.email)
    .selectGender(formData.gender)
    .fillMobile(formData.mobile);
});

When('I fill in the form with invalid mobile {string}', (invalidMobile) => {
  formData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    gender: 'Female',
    mobile: invalidMobile
  };
  
  formPage
    .fillFirstName(formData.firstName)
    .fillLastName(formData.lastName)
    .fillEmail(formData.email)
    .selectGender(formData.gender)
    .fillMobile(formData.mobile);
});

When('I submit the form', () => {
  formPage.submit();
});

Then('I should see the form submitted successfully with the correct user details', () => {
  formPage.verifyModalDisplayed();
  formPage.verifySubmittedData(
    formData.firstName,
    formData.lastName,
    formData.email,
    formData.gender,
    formData.mobile
  );
});

Then('I should see the form submitted successfully with all details', () => {
  formPage.verifyModalDisplayed();
  formPage.verifySubmittedData(
    formData.firstName,
    formData.lastName,
    formData.email,
    formData.gender,
    formData.mobile
  );
});

Then('the form should not be submitted', () => {
  formPage.verifyModalNotDisplayed();
});

Then('I should see validation error for email field', () => {
  formPage.verifyEmailValidation();
});

Then('I should see validation error for mobile field', () => {
  formPage.verifyMobileValidation();
});