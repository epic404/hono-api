export function generateToken(ctx) {
  return ctx.json({
    response: 'OK'
  })
  // TODO: generate token with jsonwebtoken.
}

export function testAuth(ctx) {
  return ctx.json({
    response: 'OK'
  })
}