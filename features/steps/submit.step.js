import {defineSupportCode} from "cucumber";
import request from "request";

defineSupportCode(function ({When}) {
  When(/ (\w*) to ([\w/]*)/, function (httpVerb, endpointPath, callback) {
    const requestHandler = request[httpVerb.toLowerCase()]

    requestHandler(`http://localhost:3030${endpointPath}`, { form: this.formData }, (error, response, body) => {
      this.response = JSON.parse(body);
      callback();
    });
  });
});
