import { compose } from "@reduxjs/toolkit";

import { withRedux } from "./with-redux";

export const withProviders = compose(withRedux);