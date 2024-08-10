import axios from "axios";

//post valid webhook
axios
  .post("http://localhost:4000/webhook/github/api-gateway", {
    action: "opened",
    number: 1,
    pull_request: {
      html_url: "",
    },
  })
  .then((res) => {
    console.log(res.data);
  });
