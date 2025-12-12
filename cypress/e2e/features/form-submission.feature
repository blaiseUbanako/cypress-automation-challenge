Feature: Form Submission on DemoQA
  As an automation tester
  I want to fill in and submit the form on the demoqa.com website
  So that I can ensure the form is being completed and displaying the correct user details

  Background:
    Given I navigate to the DemoQA form page

  Scenario Outline: Submit the form with valid user details
    When I fill in the form with the following details:
      | Field         | Value           |
      | First Name    | <FirstName>     |
      | Last Name     | <LastName>      |
      | Email address | <EmailAddress>  |
      | Gender        | <Gender>        |
      | Mobile        | <Mobile>        |
    And I submit the form
    Then I should see the form submitted successfully with the correct user details

    Examples:
      | FirstName | LastName | EmailAddress                | Gender | Mobile     |
      | Jane      | Smith    | automation-test@tester.com  | Female | 1234567891 |
      | John      | Chan     | automation-test2@tester.com | Male   | 9876543210 |

  Scenario: Submit form with all optional fields
    When I fill in the complete form with the following details:
      | Field           | Value                          |
      | First Name      | Alice                          |
      | Last Name       | Johnson                        |
      | Email address   | alice.johnson@tester.com       |
      | Gender          | Female                         |
      | Mobile          | 5551234567                     |
      | Date of Birth   | 15 March 1990                  |
      | Subjects        | Maths, Physics                 |
      | Hobbies         | Sports, Reading                |
      | Current Address | 123 Test Street, Test City     |
      | State           | NCR                            |
      | City            | Delhi                          |
    And I submit the form
    Then I should see the form submitted successfully with all details

  Scenario: Validate form with invalid email
    When I fill in the form with invalid email "invalid-email"
    And I submit the form
    Then the form should not be submitted
    

  Scenario: Validate form with invalid mobile number
    When I fill in the form with invalid mobile "thisIsAString"
    And I submit the form
    Then the form should not be submitted
    