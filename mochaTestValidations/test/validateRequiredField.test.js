// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validateRequiredField');
var validPhone = require('../app/validatePhoneNumber');
var validEmail = require('../app/validateEmailAddress');
var validZip = require('../app/validateZipCode');
var validReplace = require('../app/validateReplace');

describe("Testing Input Required", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validInput('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validInput(4));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validInput(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validInput('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validInput('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validInput('undefined'));
	});
	
	it("The value 'a 4' should pass", function(){
		assert.isTrue(validInput('a 4'));
	});
	
});	//end "Testing Input Required"

describe("Testing Valid Phone Number", function(){
	
	it("Input is required.Input should fail", function(){
		assert.isFalse(validPhone(""));
	});
	
	it("Input is required.Input should pass", function(){
		assert.isTrue(validPhone(5555555559));
	});
	
	it("Input is numeric.Input should pass", function(){
		assert.isTrue(validPhone("(123)-456-7890"));
	});
	
	it("Input is numeric.Input should fail", function(){
		assert.isFalse(validPhone("(123)-45A-7890"));
	});
	
	it("must be integers. Input should pass", function(){
		assert.isTrue(validPhone(5555555559));
	});
	
	it("must be integers. Input should fail", function(){
		assert.isFalse(validPhone("555555.5559"));
	});
	
	it("Input is 10 long.Input should pass", function(){
		assert.isTrue(validPhone("(123)-456-7890"));
	});
	
	it("Input is 10 long.Input should fail", function(){
		assert.isTrue(validPhone("(123)-456-780"));
	});
	
});

describe("Testing valid Email Address", function(){
	/*
	test that no input will fail
	test a good input will pass
	test that the missing first part will fail
	test that the the missing @ will fail
	test that the missing dot(.) will fail
	test that the missing email provider will fail
	test that the suffix after the dot will fail when missing
	test that multiple dots, dashes, numbers and @ will still pass
	*/
	it("Input is required. should fail", function(){
		assert.isFalse(validEmail(" "));
	});
	
	it("someone@email.com is good. should pass", function(){
		assert.isTrue(validEmail("someone@email.com"));
	});
	
	it("@email.com does not meet requirements. should fail", function(){
		assert.isFalse(validEmail("@email.com"));
	});
	
	it("someoneatemail.com does not meet requirements. should fail", function(){
		assert.isFalse(validEmail("someoneatemail.com"));
	});
	
	it("someone@emailcom does not meet requirements. should fail", function(){
		assert.isFalse(validEmail("someone@emailcom"));
	});
	
	it("someone@email. does not meet requirements. should fail", function(){
		assert.isFalse(validEmail("someone@email."));
	});
	
	it("so@meone@email.com is good. should pass", function(){
		assert.isTrue(validEmail("so@meone@email.com"));
	});
	
	it("so@me.one@email.com is good. should pass", function(){
		assert.isTrue(validEmail("so@me.one@email.com"));
	});
	
	it("so@me1@email.com is good. should pass", function(){
		assert.isTrue(validEmail("so@me1@email.com"));
	});
	
	it("so@me-1@email.com is good. should pass", function(){
		assert.isTrue(validEmail("so@me-1@email.com"));
	});
	
	it("someone@.com does not meet requirements. should fail", function(){
		assert.isFalse(validEmail("someone@.com"));
	});
});

describe("Testing Zip Codes", function(){
	/*
	test that no input will fail
	test a good input will pass
	test that a number not a string will still pass
	test that a letter will fail
	test that 6 characters will fail
	test that 10 characters will fail
	test that 9 characters with a dash will pass
	test that 9 characters without a dash will fail
	test that anything other than a - will (/()*,etc)
	*/
	
	it("Input is required. should fail", function(){
		assert.isFalse(validZip(" "));
	});	
	
	it("50633 is good. should pass", function(){
		assert.isTrue(validZip("50633"));
	});
	
	it("50633 number is good. should pass", function(){
		assert.isTrue(validZip(50633));
	});	
	
	it("50d633 is bad with letter. should fail", function(){
		assert.isFalse(validZip("50d63"));
	});
	
	it("506335 is 6 instead of 5. should fail", function(){
		assert.isFalse(validZip("506335"));
	});
	
	it("50d633 is bad with letter and too long. should fail", function(){
		assert.isFalse(validZip("50d633"));
	});
	
	it("50633-8964 is good. should pass", function(){
		assert.isTrue(validZip("50633-8964"));
	});
	
	it("50633-89644 is too long with second part. should fail", function(){
		assert.isFalse(validZip("50633-89644"));
	});
	
	it("506339644 does not have a dash. should fail", function(){
		assert.isFalse(validZip("506339644"));
	});
	
	it("50633*8964 is not good with star. should fail", function(){
		assert.isFalse(validZip("50633*8964"));
	});
	
	it("50633(8964) is not good with parantheses. should fail", function(){
		assert.isFalse(validZip("50633(8964)"));
	});
});

describe("Testing Replace Function", function(){
	
	/*
	test each character individually
	test a string with multiple special characters
	test a string with nothing but special characters
	test a string without special characters
	*/
	
	it("this string should pass", function(){
		assert.equal(validReplace("spider/man"), "spider-man");		
	});
	
	it("this string should pass", function(){
		assert.equal(validReplace("Hello, it's my turn"), "Hello, it-s my turn");		
	});
	
	it("multiple in string should pass", function(){
		assert.equal(validReplace("<this is a test>"), "-this is a test-");		
	});
	
	it("multiple in string should pass", function(){
		assert.equal(validReplace("<'/'/''><>"), "----------");		
	});
	
	it("no special character string should not change", function(){
		assert.equal(validReplace("spiderman"), "spiderman");		
	});
	
});