# Hack the Beach

Presented by the City of Santa Monica

## Development Setup

This is a fairly standard [Jekyll](http://jekyllrb.com/) site, hosted on [gh-pages](https://pages.github.com/).
In fact, this site follows [Jekyll's recommendation](http://jekyllrb.com/docs/github-pages/) and was setup using the
`github-pages` gem. We use [Bundler](http://bundler.io/) to manage gem installs.

Getting all of this working on Windows is *technically possible*. But it's a big hassle. Jekyll recommends using
Linux (e.g. Ubuntu) or OS X, and so do I.

  1. Clone the repo into a local directory
  
  > `$ git clone git@github.com:CityofSantaMonica/hackthebeach.git ./hackthebeach`
  > `$ ...`
  > `$ cd hackthebeach`
  
  2. Install the `github-pages` gem and its dependencies
  
  > `$ bundle install`
  
  then launch the website locally (available at [http://localhost:4000](http://localhost:4000))
  
  > `$ jekyll serve --baseurl ''`
  
  3. Or do it all at once
  
  > `$ bundle exec jekyll serve --baseurl ''`