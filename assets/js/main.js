/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$titleBar = null,
		$nav = $('#nav'),
		$wrapper = $('#wrapper');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '1025px',  '1280px' ],
			medium:   [ '737px',   '1024px' ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Tweaks/fixes.

		// Polyfill: Object fit.
			if (!browser.canUse('object-fit')) {

				$('.image[data-position]').each(function() {

					var $this = $(this),
						$img = $this.children('img');

					// Apply img as background.
						$this
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', $this.data('position'))
							.css('background-size', 'cover')
							.css('background-repeat', 'no-repeat');

					// Hide img.
						$img
							.css('opacity', '0');

				});

			}

	// Header Panel.

		// Nav.
			var $nav_a = $nav.find('a');

			$nav_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$nav_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '5vh',
							bottom: '5vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($nav_a.filter('.active-locked').length == 0) {

										$nav_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		// Title Bar.
			$titleBar = $(
				'<div id="titleBar">' +
					'<a href="#header" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$header
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'header-visible'
				});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				if (breakpoints.active('<=medium'))
					return $titleBar.height();

				return 0;

			}
		});

})(jQuery);

// Optional JavaScript to animate the skill bars on scroll
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', animateSkillBars);
    function animateSkillBars() {
        document.querySelectorAll('.skill-level').forEach(function(bar) {
            var barWidth = bar.dataset.level;
            if (isElementInViewport(bar)) {
                bar.style.width = barWidth + '%';
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggle-skills');
    var linkSkills = document.getElementById('link-skills');
    var skillsContainer = document.querySelector('.skills-container');

    var toggleSkills = function() {
        skillsContainer.classList.toggle('open');
    };

    toggleButton.addEventListener('click', toggleSkills);
    linkSkills.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default anchor click behavior
        toggleSkills();
        location.hash = "toggle-skills";  // Manually set the hash to ensure navigation
    });
});


// Optional JavaScript to animate the skill stars on load
document.querySelectorAll('.skill-stars').forEach(container => {
    const rating = parseInt(container.getAttribute('data-rating'), 10);
    container.innerHTML = `${'<i class="fas fa-star filled"></i>'.repeat(rating)}${'<i class="fas fa-star unfilled"></i>'.repeat(5 - rating)}`;
});

// Optional JavaScript to animate the skill stars on load
document.querySelectorAll('.skill-stars_2').forEach(container => {
    const rating = parseInt(container.getAttribute('data-rating'), 10);
    container.innerHTML = `${'<i class="fas fa-star filled_2"></i>'.repeat(rating)}${'<i class="fas fa-star unfilled"></i>'.repeat(5 - rating)}`;
});



// Optional JavaScript to display a hover image on link hover
document.querySelectorAll('.hover-link, .hover-link-nat').forEach(link => {
	link.addEventListener('mouseenter', function(e) {
	  const imgSrc = this.getAttribute('data-img-src');
	  const hoverImage = document.getElementById('hover-image');
	  hoverImage.src = imgSrc;
	  hoverImage.style.display = 'block';
	  const linkRect = this.getBoundingClientRect();
	  hoverImage.style.top = `${linkRect.top + window.scrollY + linkRect.height}px`;
	  hoverImage.style.left = `${linkRect.left + window.scrollX}px`;
	});
  
	link.addEventListener('mouseleave', function() {
	  document.getElementById('hover-image').style.display = 'none';
	});
  });
  




  

  

  function toggleBranch(branchId) {
    var branch = document.getElementById(branchId);
    if (branch.style.display === "none" || branch.style.display === "") {
        branch.style.display = "block";
    } else {
        branch.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.skill-stars, .skill-stars_2').forEach(container => {
        const rating = parseInt(container.getAttribute('data-rating'), 10);
        container.innerHTML = `${'<i class="fas fa-star"></i>'.repeat(rating)}${'<i class="fas fa-star unfilled"></i>'.repeat(5 - rating)}`;
    });

    // Initialize all branches as collapsed
    document.querySelectorAll('.skill-sub-branch').forEach(branch => {
        branch.style.display = 'none';
    });

    document.querySelectorAll('.skill-items').forEach(items => {
        items.style.display = 'none';
    });
});
