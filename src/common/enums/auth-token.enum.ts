import { registerEnumType } from "@nestjs/graphql"

enum AuthToken {
  Access = "Access",
  Refresh = "Refresh",
}

registerEnumType(AuthToken, {
    name: "AuthToken",
})

export default AuthToken
