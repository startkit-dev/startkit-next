import { render } from "@testing-library/react"

import Home from "./page"

test("The home page should have exactly 1 `main` section", () => {
  const { getByRole } = render(<Home />)
  const main = getByRole("main")

  expect(main).toBeInTheDocument()
})
