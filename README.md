# TechSoc Site Development

Jekyll is essentially a parsing engine, not a CMS. but it's better. Read the "Jekyll Introduction" on the home page, you'll find it under "Sample Posts" when you're running the site locally

To edit **styles**: got to `assets/themes/techsoc/css/style.css`, NOT `_site/assets.../style.css`, this is where the site is stored after parsing. JS is under `assets/themes/techsoc/js`.

To edit **HTML**: it's `_includes/themes/techsoc/`. `default.html` for all general html, `page.html` for content of pages, and `post.html` for content of posts. Editing here changes all pages/posts, thank da Lord.

If you want to define a new page style, create it in `_includes/themes/techsoc/`, and make sure you have settings configured in '_layouts/' with the same name. E.g. `_includes/themes/techsoc/main.html` is defined by '_layouts/main.html'. Settings should look like this:
'''
---
theme :
  name : techsoc
layout: default
---
{% include JB/setup %}
{% include themes/techsoc/main.html %}

'''


Branding images have been stored in `assets/themes/techsoc/images`.

Note: `{{ ASSET_PATH }}` refers to `assets/themes/THEME_NAME`, so don't add that in again please, but straight to the subfile of `techsoc`.


## Installing Jekyll and Running the Site Locally

Make sure you only have one version of ruby. You also need [RVM](https://rvm.io/rvm/install) and [Rubygems](https://rubygems.org/pages/download).

Use Rubygems to install jekyll: `gem install jekyll`, you can do this in your home directory.

cd to your GitHub folder, and go `jekyll serve` to see it hosted locally. Yes, you can change the code at the same time.


### Plug-ins

Other than [bootstrap](http://getbootstrap.com/components/), I've plugged in [jQuery](http://api.jquery.com/). Consider [d3.js](http://d3js.org/).


#### Analytics & Comments

Analytics & comments have been installed and can be configured in configs `_config.yml`.


# Jekyll-Bootstrap

The quickest way to start and publish your Jekyll powered blog. 100% compatible with GitHub pages


## Usage

For all usage and documentation please see: <http://jekyllbootstrap.com>

Original Author/Maintained at https://github.com/plusjade/jekyllbootstrap.com


## Version

0.3.0 - stable and versioned using [semantic versioning](http://semver.org/).

**NOTE:** 0.3.0 introduces a new theme which is not backwards compatible in the sense it won't _look_ like the old version.
However, the actual API has not changed at all.
You might want to run 0.3.0 in a branch to make sure you are ok with the theme design changes.


### Some Bugs

|Bug |Description
|------|---------------
|[#86](https://github.com/plusjade/jekyll-bootstrap/issues/86)  |&#x2611; Facebook Comments
|[#113](https://github.com/plusjade/jekyll-bootstrap/issues/113)|&#x2611; ASSET_PATH w/ page & post
|[#144](https://github.com/plusjade/jekyll-bootstrap/issues/144)|&#x2610; BASE_PATH w/ FQDN
|[#227](https://github.com/plusjade/jekyll-bootstrap/issues/227)|&#x2611; Redundant JB/setup

### Features

|Bug |Description
|------|---------------
|[#98](https://github.com/plusjade/jekyll-bootstrap/issues/98)  |&#x2611; GIST Integration
|[#244](https://github.com/plusjade/jekyll-bootstrap/issues/244)|&#x2611; JB/file_exists Helper
|[#42](https://github.com/plusjade/jekyll-bootstrap/issues/42)  |&#x2611; Sort collections of Pages / Posts
|[#84](https://github.com/plusjade/jekyll-bootstrap/issues/84)  |&#x2610; Detecting production mode


## License

[MIT](http://opensource.org/licenses/MIT)
