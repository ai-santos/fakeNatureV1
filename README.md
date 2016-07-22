# fakeNatureV1
This application will allow anyone to upload images to it and will allow those with Facebook accounts to share the pictures to their accounts.


Draft

## Description

This application will allow anyone to upload images to it and will allow those with Facebook accounts to share the pictures to their accounts.

## Context

There are multiple useful components to this project. The developers would need to learn to work with databases that would store information, would need to work on an authentication process so they could log in to the application, would need to be able to let users upload their pictures, and would need some integration with Facebook. Allowed to use Ionic/Angular. 

## Specifications

- [ ] As a user, I can create an account and log in.
  - [x ] use oAUTH and create log in and authenticate user information (user name and password) which stores in a database and       uses bcrypt
- [x] As a user, I can upload my pictures.
  - [ ] Can upload pictures using Amazon Web Services/ Paperclip  
- [x] As a user, I can bring up a map and find and click the location where the picture was taken and tag the picture with the geotag.
  - [x] Record the location of where the picture is taken (store it in a database)
  - [ ] Show the pictures on a custom styled map based on location
- [x] As a user, I can view all of my uploaded images.
- [ ] As a user, I can see the images uploaded by my friends on this service. 
- [ ] As a user, I can share these pictures to Facebook.

### Required

- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT
