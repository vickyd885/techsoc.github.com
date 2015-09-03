---
layout: main
title: UCLU TechSoc
header: UCLU Technology Society
tagline: Connect. Create. Collaborate.
---
{% include JB/setup %}



<div class="text-center">
	<h2>What Is TechSoc?</h2>
		<p>
			Shorter version of <a href="about.html">about</a> page.
		</p>
	<div class="col-md-4 col-sm-4 col-lg-4">
		<h3>An Accessible Network</h3>
		<p>	
			something
		</p>
	</div>
	<div class="col-md-4 col-sm-4 col-lg-4">
		<h3>A Platform for Encouragement</h3>
		<p>
			something
		</p>
	</div>
	<div class="col-md-4 col-sm-4 col-lg-4">
		<h3>We Bridge the Gap</h3>
		<p>
			something
		</p>
	</div>
</div>


#


## Jekyll How to & Sample Posts

Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html).

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com).

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list":

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

