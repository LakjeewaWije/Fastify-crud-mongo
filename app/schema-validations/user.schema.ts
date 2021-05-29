export const registerBodySchema = {
    type: "object",
    properties: {
      fName: { type: "string" },
      lName: { type: "string" },
      jwtToken: { type: "string" }
    },
    required: ["fName", "lName"],
  };