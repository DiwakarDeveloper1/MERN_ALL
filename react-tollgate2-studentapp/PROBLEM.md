# React TollGate Assessment - StudentApp - Boilerplate

## Objective

Create a React Application For Student Management.

This is a simple web application, where, you can add the details of a Student and display the details of all the added students in a Card Format. 

Complete this Student management application by adding required functionality and submit it within the alloted time.

## Things to do

1. The app is composed of 4 Components.

			- Components (App Component,AddStudent Component,ShowStudent and HeaderComponent)
	
2. AppComponent is the RootComponent and should contain HeaderComponent and Router Component for Routing AddStudent and ShowStudent components.

3. Header Component should be a functional component and contain the 'Navbar' and should display the App Title, which is, "StudentApp" with Links to Route AddStudent and ShowStudent components.

4. AddStudent Component should be a functional component and Display a Form, for getting the details of the Student to be added from the user, and ShowStudent component shows the details of the Student that are already added in Card format.

5. The form should contain the below input fileds:

			- Input of type text for getting the Student Name.

			- Input of type Date for getting the Student DOB which can select from calender.

			- Input of type text for getting the Student Gender which can select from Radio Button.

			- Input of type text for getting Student address.

			- Inout of type number for getting Mobile Number

-  Apply the appropriate validator to each of the Input fields, so that, the form should be valid only when all the field is containing the value.

6. ShowStudent component should display the details as follows.    

		-  Should display id, name, Dob, gender, address and  Mobile No of each Students.
		- Each card should be dynamically created using approriate structural directive depending upon the number of Student, the component, received from the server.  
		- Use String Interpolation to bind the values of Student object.

7. Complete the below functions of AddPStudent Component:  			
			- submitHandler() - Called when the form is submitted. Adds the Student to the state by calling setState() method.
			- use appropriate properties in the  State object to store the Student details. 

8. Use Json-server api to store Student details in a Student.json file using "axios" library.

9. Use "Context" to share student data between components
