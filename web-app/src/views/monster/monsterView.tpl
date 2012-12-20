<ul id="menu">
    <li>
        <a href="#home" class="home"></a>
        <span style="opacity:0;"></span>
    </li>
    <li>
        <a href="#filters" class="filters"></a>
            <span style="opacity:0;"></span>
    </li>
</ul>
<h1>Monster Generator</h1>
<div >
    <div>
        <select id='monsters'>
        </select>
    </div>
</div>
<br>
<div>
    <div id='info'>
    </div>
</div>

<script type="text/javascript">
	$(function() {

		$("ul#menu span").css("opacity","0");

		$("ul#menu span").hover(function () {

			$(this).stop().animate({
				opacity: 1
			}, "slow");
		},

		function () {

			$(this).stop().animate({
				opacity: 0
			}, "slow");
		});
	});
</script>