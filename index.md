---
layout: main
title: Home
header: UCLU Technology Society
tagline: Connect. Create. Collaborate.
---
{% include JB/setup %}



<div class="text-center">
	<h2>Tech is the New Black</h2>
</div>
<div class="col-md-8 col-xs-12">
		<h4>We live in a wonderful, digital world.</h4>
		<div class="intro-text text-center">
		<p>
			<br>
			Technology has enabled us to do so many things swiftly and effeciently. 
			<br>
			<br>
			From the commute home, to scheduling appointments, transfering money and communicating with people across the globe, we rely on technology to get things done.
			<br>
			<br>
			We care deeply about technology, and we think you should too.
			<br>
			<br>
			<a href="/blog/2015/09/04/tech-is-the-new-black/">Let us open your mind to the digital sphere of life</a>. (Will make this into a fancy button)
		</p>
		<p>
			Tech is simple. Tech is accessible. Tech is empowering. 
			<br>
			Don't just <em>try</em> to innovate, <strong>build</strong> the future.
			<br>
		</p>
	</div>
</div>
<div class="col-md-4 col-xs-12" id="feature-vid">
	<p class="text-center">
		The winning hack at last year's <a href="http://hacklondon.org" target="_blank">HackLondon</a>, by some of our members.
	</p>
	<div class="video-wrapper">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/KuDBV92Z0rw?rel=0" frameborder="0" allowfullscreen></iframe>
	</div>
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
