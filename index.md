---
layout: main
title: UCLU TechSoc
header: UCLU Technology Society
tagline: Connect. Create. Collaborate.
---
{% include JB/setup %}



<div class="text-center">
	<h2>Tech is the New Black</h2>
		<h3>We live in a wonderful, digital world.</h3>
</div>
<div class="intro-text text-center">
	<p>
		Technology has enabled us to do so many things swiftly and effeciently. 
		<br>
		From the commute home, to scheduling appointments, transfering money and communicating with people across the globe, we rely on technology to get things done.
		<br>
		<br>
	</p>
</div>
<div class="col-md-8 text-center">
	<div class="col-md-6">
		<span class="glyphicon glyphicon-tasks"></span>
		<br>
		Businesses everywhere rely on technology to automate processes, secure information and serve their customers.
	</div>
	<div class="col-md-6">
		<span class="glyphicon glyphicon-briefcase"></span>
		<br>
		Essential professional services continue to invest in technology to provide a better experiences for people everywhere, and maintain a competitive edge in their markets.
	</div>
	<div class="col-md-6">
		<span class="glyphicon glyphicon-wrench"></span>
		<br>
		For example, one of our sponsors, Credit Suisse, is a renowned innovator in algorithmic trading, digital private banking, on-the-go services, and more.
	</div>
	<div class="col-md-6">
		<span class="glyphicon glyphicon-gift"></span>
		<br>
		Fashion houses and retail brands worldwide use technology to better understand what their customers want, supercharge operations, and to secure their transactions.
	</div>
</div>
<div class="col-md-4 text-center">
	<span class="glyphicon glyphicon-user"></span>
	<br>
	Technology doesn't just empower organisations, it also empowers individuals. <a href="http://www.ucluefs.com" target="_blank">Wordpress</a> lets you (and small businesses) host your own website without having to touch code. 
	<br>
	<span class="glyphicon glyphicon-globe"></span>
	<br>
	Facebook cracked the problem of connecting real people over the internet, using real identity. And Google lets you access knowledge and organise your information as swiftly as possible.
</div>
<div class="col-md-12 text-center">
	<br>
	Tech is simple. Tech is accessible. Tech is empowering. 
	<br>
	<br>
	We care deeply about technology, and we think you should too.
	<br>
	Let us open your mind to the digital sphere of life. Don't just <em>try</em> to innovate, build the future.
</div>
			
		
<div class="col-md-12 text-center">
	<h2>What is <a href="about.html">TechSoc</a>?</h2>
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


<div class ="col-md-12 text-center">
	<h2>Jekyll How to &amp; Sample Posts</h2>
	<p> Read <a href="http://jekyllbootstrap.com/usage/jekyll-quick-start.html" target="_blank">Jekyll Quick Start</a>.
	</p>
	<p>Complete usage and documentation available at: <a href="http://jekyllbootstrap.com" target="_blank">Jekyll Bootstrap</a>.
	</p>
	<p>This blog contains sample posts which help stage pages and blog data. When you don't need the samples anymore just delete the <code>_posts/core-samples</code> folder.
	</p>
	<p>
		<pre>
			<code>$ rm -rf _posts/core-samples</code>
		</pre>
	</p>

	<p>
		Here's a sample "posts list":
	</p>

	<ul class="posts">
	  {% for post in site.posts %}
	    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
	  {% endfor %}
	</ul>
</div>
