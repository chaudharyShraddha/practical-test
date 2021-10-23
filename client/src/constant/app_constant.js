const env = "local";

const masterConfig = {
  local: {
    SERVER_URL: "http://localhost:3001",
  },
};

export const { SERVER_URL } = masterConfig[env];

export const LEAVE_TYPE = [
  { name: "Full", value: "full" },
  { name: "Half", value: "half" },
];

