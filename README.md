# Hack the Beach

Presented by the City of Santa Monica and the Santa Monica Chamber of Commerce.

## Development

### Getting Started

This is a fairly standard [Jekyll](http://jekyllrb.com/) site, hosted on [gh-pages](https://pages.github.com/).
In fact, this site follows [Jekyll's recommendation](http://jekyllrb.com/docs/github-pages/) and was setup using the
`github-pages` gem. We use [Bundler](http://bundler.io/) to manage gem installs.

Getting all of this working on Windows is *technically possible*. But it's a big hassle. Jekyll recommends using
Linux (e.g. Ubuntu) or OS X, and so do we.

  1. Clone the repo into a local directory
  
  > `$ git clone git@github.com:CityofSantaMonica/hackthebeach.git hackthebeach`  
  > `$ cloning into 'hackthebeach'...`  
  > `$ cd hackthebeach`
  
  2. Install the `github-pages` gem and its dependencies
  
  > `$ bundle install`
  
  3. Launch the website locally (available at [http://localhost:4000](http://localhost:4000))
  
  > `$ bundle exec jekyll serve --baseurl ''`

### Project Layout

The standard [Jekyll structure](http://jekyllrb.com/docs/structure/) is used. We opted for the
[Named HTML files with permalinks](http://jekyllrb.com/docs/pages/#named-html-files)
approach to keep page URLs clean.

#### Partial Templates

Well they aren't *Jekyll templates*, but "partial template" is a name that fits. Inside `_includes/templates` are a
number of Liquidified HTML snippets for rendering different content within consistent stylistic containers.

For example, `_includes/templates/button.html` defines the reusable button component used on the site. Usage is simple through
[Jekyll includes](http://jekyllrb.com/docs/templates/#includes):

    <div>
       {% include templates/button.html href="http://example.com" text="click me" %}
    </div>

Sections of a particular `index.html` page are rendered using the `_includes/templates/section.html` template, the content
of which is stored in the corresponding folder under `_includes` (e.g. `_includes/index` for the homepage partial content)

#### `_data`

This folder contains the repeatable, structured content as YAML documents:
  - events
  - challenges
  - team and partners
  
#### Sass

Styles are built using `scss` partial files inside the `_sass` folder, each of which is `@imported` into the
`css/main.scss` file. This is converted to the `css/main.css` file that is served with the site.
