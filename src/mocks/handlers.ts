import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("/api/settings", () => {
    return HttpResponse.json({
      field1: "Field1 data",
      field2: "2",
      field3: "Field2 data",
      field4: "4",
      field5: "Field2 data",
    });
  }),
];
