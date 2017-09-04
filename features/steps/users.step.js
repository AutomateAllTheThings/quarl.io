import {defineSupportCode} from 'cucumber';
import chai from "chai";
chai.should();

defineSupportCode(function ({Given, Then}) {
  Given(/ valid user attributes/, function () {
    this.formData = {
      name: "Bob Builder",
      email: "bobbuilder@yeswecan.com",
      password: "hunter2"
    };
  });

  Given(/ invalid user attributes/, function () {
    this.formData = {
      name: "",
      email: "",
      password: ""
    };
  });

  Then(/should receive user details/, function () {
    const userDetails = this.response;
    userDetails.name.should.eql(this.formData.name);
  });
});
