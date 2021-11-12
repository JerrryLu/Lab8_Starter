// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// Part 2
test("valid phone number 1", () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test("valid phone number 2", () => {
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
});

test("invalid phone number 1", () => {
    expect(functions.isPhoneNumber("12345-678-90")).toBe(false);
});

test("invalid phone number 2", () => {
    expect(functions.isPhoneNumber("1111111111")).toBe(false);
});

test("valid email 1", () => {
    expect(functions.isEmail("Richter@Belmont.com")).toBe(true);
});

test("valid email 2", () => {
    expect(functions.isEmail("SomaCruz@DraculasCastle.gov")).toBe(true);
});

test("invalid email 1", () => {
    expect(functions.isEmail("@WhatIsAMan.com")).toBe(false);
});

test("invalid email 2", () => {
    expect(functions.isEmail("YouDontBelongInThisWorld@Dracula")).toBe(false);
});

test("strong password 1", () => {
    expect(functions.isStrongPassword("passwordAdmin")).toBe(true);
});

test("strong password 2", () => {
    expect(functions.isStrongPassword("password123")).toBe(true);
});

test("weak password 1", () => {
    expect(functions.isStrongPassword("1000blades")).toBe(false);
});

test("weak password 2", () => {
    expect(functions.isStrongPassword("ItWasNotByMyHandThatIAmOnceAgain")).toBe(false);
});

test("valid date 1", () => {
    expect(functions.isDate("05/06/2003")).toBe(true);
});

test("valid date 2", () => {
    expect(functions.isDate("04/20/1990")).toBe(true);
});

test("invalid date 1", () => {
    expect(functions.isDate("11/14/06")).toBe(false);
});

test("invalid date 2", () => {
    expect(functions.isDate("4/5/94")).toBe(false);
});

test("valid hex color 1", () => {
    expect(functions.isHexColor("FFFFFF")).toBe(true);
});

test("valid hex color 2", () => {
    expect(functions.isHexColor("000000")).toBe(true);
});

test("invalid hex color 1", () => {
    expect(functions.isHexColor("FFFFF")).toBe(false);
});

test("invalid hex color 2", () => {
    expect(functions.isHexColor("FF")).toBe(false);
});