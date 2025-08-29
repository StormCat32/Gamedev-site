---
title: Welcome
layout: base.njk
permalink: /
---

<!-- DESCRIPTION -->
<section id="splash">
	<img src="/images/title.png" alt="{{ site.title }}">
	<h1>{{ site.subtitle }}</h1>
	<a href="{{ site.link.steam }}" id="wishlist" target="_blank">Wishlist on Steam!</a>
</section>

<!-- VIDEO EMBED -->
<section id="video">
	<iframe src="{{ site.link.trailer }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</section>

<section id="description">
	<p>WIZARD PUNKS!!! is inspired by the classic couch party games of the early 2010s. With a unique system of combining elements to craft spells, the powers of Air, Earth, Fire and Water are yours to control.</p>
</section>

<!-- SCREENSHOTS -->
<section id="screenshots">
	<div class="gallery">
	{%- for i in range(1, 7) -%}
			<img class="screenshot" src="/images/screenshots/screenshot-{{i}}.png" loading="lazy">
	{%- endfor -%}
	</div>
</section>

<!-- ABOUT -->
<section id="about">
	<p>Made by <a href="{{ site.link.bluesky }}">StormCat</a>.<br>Find out more in the <a href="/presskit">presskit</a>.</p>
</section>

<!-- PUNK -->
{% include "partial/wizard.njk" %}