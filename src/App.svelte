<script>

	export let header, subheader;
	let myDate = new Date('2020-02-11T08:00');
	function clockTick()    {
		let currentTime = new Date();
		let month = currentTime.getMonth() + 1;
		let day = currentTime.getDate();
		let year = currentTime.getFullYear();
		let hours = currentTime.getHours();
		let minutes = currentTime.getMinutes();
		let seconds = currentTime.getSeconds('ss');

		let allDays = ((Math.floor(currentTime - myDate)/(60*60*24*1000)).toFixed());
		let allMinutes = ((Math.floor(currentTime - myDate)/(24*1000)).toFixed());
		let allSeconds = ((Math.floor(currentTime - myDate)/(1000)).toFixed());
		// document.getElementById('time').innerHTML=hours+':'+minutes+':'+seconds;
		document.getElementById('days').innerHTML= allDays;
		document.getElementById('minutes').innerHTML= allMinutes;
		document.getElementById('seconds').innerHTML= allSeconds;
	}


	setInterval(clockTick, 1000);
</script>
<div class="topbar">
	<a href="#">How to Long</a>
</div>
<main>
	<h1>{header} ...</h1>
	<h2>{subheader}</h2>
	<p id="days"></p><span>днів</span>
	<h3>або</h3>
	<p id="minutes"></p><span>хвилин</span>
	<h3>або</h3>
	<p id="seconds"></p><span>секунд</span>
</main>

<style>
	.topbar {
		padding: 10px 30px;
	}
	.topbar a,
	.topbar a:link,
	.topbar a:visited {
		color: black;
		text-decoration: none;
		margin: 20px 0;
		font-size: 20px;
	}
	.topbar a:hover,
	.topbar a:active {
		color: #333;
	}
	main {
		text-align: center;
		background: #f5f5f5;
		border-top: 2px solid #ef2d00;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	h2 {
		color: #ff3e00;
		font-size: 3em;
		font-weight: 100;
	}
	p {
		color: #ff3e00;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
