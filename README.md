# Using Vercel
https://www.youtube.com/watch?v=lAJ6LyvW_cw

$ npm install -global vercel
$ vercel

https://vercel.com/login
https://hello-react-gold-delta.vercel.app 
https://vercel.com/mpfdj/hello-react/settings


# Using Heroku
$ npx create-react-app@3.x hello-react
$ cd hello-react

$ git init
$ git add .
$ git commit -m "First commit"

$ heroku login
$ heroku create hello-react --buildpack mars/create-react-app

$ git push heroku master
$ heroku open

$ heroku logs --tail