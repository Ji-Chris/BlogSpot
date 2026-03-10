

import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { authClient } from "@/lib/auth-client"

export const { POST, GET } = toNextJsHandler(auth)
