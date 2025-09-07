---
title: Presskit
"layout": "base.njk"
---
<style>
	header { 
		display: flex; 
		flex-flow: row nowrap;
		justify-content: space-between;
		padding-inline: 1em;
		padding-block: 0.2em;

		nav {
			ul { 
				display: flex; flex-flow: row nowrap; gap: 0.5em;
				li { display: block; }
			}

		}
	}

	main {
		display: grid;
		grid-template-columns: 500px auto;
		grid-template-rows: auto;

		justify-items: start;
		align-items: stretch;

		p { font-size: unset; margin: 1em 0;}

		h1 { margin-inline: unset; }

		h2 { margin-block: 1em 0.5em; }

		ul { margin-block: 0.5em; }
		li { margin-left: 1em; margin-block: 0.5em; }

		> * {  text-align: left; padding-inline: 3em; margin-inline: 0; }

		#factsheet {
			max-width: 500px;
			background-color: #f9d1d1;
		}

		#description {
			max-width: 100%;

			p { max-width: 70ch; }
		}

		.gallery { margin: 0; width: 100%; }
	}

	@media screen and (max-width: 800px) {
		main { 
			display: flex;

			div { padding-inline: 1.5em; }
		}
	}
</style>

<div id="factsheet">

# Factsheet

## Developer

{{ site.author }}  
Based in {{ site.location }}

## Press/Business Contact

Hugh Craig, Developer.  
[{{site.email}}](mailto:{{site.email}})

## Platforms

- [Steam (PC)]({{ site.link.steam}})
- [itch.io (PC)]({{ site.link.itch}})

## Socials

- [Bluesky]({{site.link.bluesky}})
- [X (Formerly Twitter)]({{site.link.x}})
- [Tumblr]({{ site.link.tumblr}})
- [Instagram]({{ site.link.instagram}})

</div>
<div id="description">

# Description
**WIZARD PUNKS!!!** is a fast-paced, spell-slinging 4-player local party game, inspired by the classic couch party games of the early 2010s. With a unique system of combining elements to craft spells, the powers of Air, Earth, Fire and Water are yours to control and mix.

With its rapid-fire, hilarity-inducing, tense gameplay **WIZARD PUNKS!!!** is a quirky and competitive game that is fun to play and to spectate.

## Four Unique Elements

- **Air** - A flowing Wind Helix, or a powerful homing pull
- **Earth** - A jagged Giant Rock, or chaotic ricocheting bounces
- **Fire** - A burning Sun Laser, or a bombastic exploding blast
- **Water** - A chilling Frost Bubble, or a ground-piercing phasing bolt

Each spell you create uses up to three elements. One for the base, and two for the modification effects. Create a bouncing, homing laser by creating a spell with **Fire/Air/Earth** or use the same elements to create an exploding, homing boulder with **Earth/Fire/Air**.

## Key Features

- Local Multiplayer For Up To 4 Players
- 2 Punktastic Game Modes
- 20 Unlockable Palettes
- 4 Unique Elements - With 68 Unique Spell Combinations
- CPU Opponents With 3 Different Difficulties
- Original Wizarding Soundtrack

# Logo
<a href="/images/title.png"><img style="width: 100%;" src="/images/title.png" alt="WIZARD PUNKS!!! Logo"></a>

# Key Art
<div class="gallery">
	{%- for i in range(1, 3) -%}
		<a href="/images/key-art-{{i}}.png"><img class="" src="/images/key-art-{{i}}.png" loading="lazy"></a>
	{%- endfor -%}
</div>


# Screenshots
<div class="gallery">
	{%- for i in range(1, 10) -%}
		<a href="/images/screenshots/screenshot-{{i}}.png"><img class="screenshot" src="/images/screenshots/screenshot-{{i}}.png" loading="lazy"></a>
	{%- endfor -%}
</div>

# Trailer
<iframe width="560" height="315"  src={{site.link.trailer}} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>