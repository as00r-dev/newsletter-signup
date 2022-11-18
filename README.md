# newsletter-signup

## Description

This project was made during TOP curriculum to practice CSS Layout skills and also Form validation.

Although the form is not connected with any DB. Still, don't enter any real user details there.

Additionally, I have disabled second password box, and only when user inputs something in first password box, it gets enabled.

## Usage

### Installing

No need to install, this is a static page.

### Folder structure

Here's a folder structure:

```
calculator/                  # Root directory.
|- index.html                # Index
|- script.js                 # Script
|- style.css                 # Style
```

### app.js details

`removeDisabled()` : Removes `disabled` attribute from the second password box when any text is entered in first password box.

`matchPasswords()` : Matches the passwords. This works in this way -
1.) If the length of input in second password input is less than first input,
then, this is considered as user is still typing the password so even if
passwords don't match, it is ignored.
2.) When the length of input in both boxes is same, then only passwords are matched.
