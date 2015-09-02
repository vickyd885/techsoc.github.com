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
		<h3>An Accessible Network</h3>
		<p>	
			something
		</p>
		<h3>A Platform for Encouragement</h3>
		<p>
			something
		</p>
		<h3>A (something about diversity)</h3>
		<p>
			In line with our goals to make the tech industry accessible to students with diverse backgrounds, we make a conscious effort to collaborate with other societies to raise awareness of the vast range of opportunities available to them.
		</p>
</div>




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

