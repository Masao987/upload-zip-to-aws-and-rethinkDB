export default app => {
  return (req, res, next) => {
    const body = req.body

    app.service('users').create({
      email: body.email,
      password: body.password
    })
    .then(user => res.redirect('/login.html'))
    .catch(next)
  }
}
