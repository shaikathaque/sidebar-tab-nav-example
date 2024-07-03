import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("/api/settings", () => {
    return HttpResponse.json({ id: "abc-123" });
  }),
];
